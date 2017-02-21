# Frontend pipeline

The boilerplate encourages you to use a modern approach to manage your frontend
code (CSS and Javascript). Basically, we want to achieve the following:

- Avoid adding code from third-party dependencies (like jQuery) to the
  project's repository.
- Support explicit importing/inclusion of CSS and JS dependencies. This
  contrasts with the approach of relying on the global namespace of CSS and JS
  to "share" code on the application level.
- Follow better development practices in frontend programming, like loose
  coupling, reusable code, and DRYness.

In practice, this means following some encapsulation and file organization
rules, and incorporate tooling handle dependencies and bundling.

## Package (dependency) management

You're most likely familiar with [pip], the recommended tool for installing
Python packages. Javascript has several package managers, but arguably the most
popular is npm (Node Package Manager).

npm will allow us to do in the frontend what we already do in the backend with
pip. Namely, we will be able to list dependencies in a file that will be
tracked in VCS and ensure that all developers share the same environment
without the need of tracking third-party source code in the project's
repository.

Take jQuery for example. The "normal" approach is to include a file like
`jquery.js` in your repo to make sure it is distributed wherever the project
goes. This has the downside of considerably increasing the size of your repo,
as well as producing huge diffs for code you didn't write, and is all-around
impractical. To really understand why this is a bad idea, imagine if you had to
keep track of your Python dependencies in your project repository. Imagine you
had to include the complete source of Django or Mezzanine! That's insane, and
we know that a `requirements.txt` file is way better.

In a similar manner, npm supports a `package.json` file where you can list all
your dependencies. You then check this file into VCS, and all developers can
install the packages they need in their computers with one command. Neat!

Note that `package.json` stores project-wide dependencies in the `dependencies`
key, and development-only dependencies under `devDependencies`. Basically,
anything that is imported / used in your frontend code should go under
`dependencies`, and all tools, linters, and support packages go in
`devDependencies`.

Continuing with the Python parallels, npm also fulfills the role of
[virtualenv]. Everything you install via npm lives in a `node_modules` folder
alongside `package.json`, making all packages local to each project. You should
keep this folder out of version control too.

We are not going to go into actually using npm and `package.json` (that is
outside the scope of this guide and is very well [documented]). Once you're
comfortable with npm, simply follow these rules when working with the
boilerplate:

- You can find the frontend dependencies for a project created with the
  boilerplate in `theme/static/package.json`.
- Fastest way to get all packages is explained in the Quickstart section of the
  docs' home.
- Always save new packages to `packages.json` with `npm install some_package
  --save`. Development dependencies (transpilers, command line utilities, etc)
  can be saved to `devDependencies` with the `--save-dev` flag.
- Keep your version of npm up to date, and make sure all devs are using the
  same version.
- Use npm to handle all frontend dependencies. We want to avoid tracking
  third-party code as much as possible. If a package is not on npm, you may be
  able to install from GitHub or even package and publish it yourself.

## Module bundling

We're using Webpack 2 to compile and bundle all frontend dependencies. It
allows us to create small, independent, focused components. They are then
bundled together into regular Javascript and CSS files ready to be served to
the browser.

If you're not familiar with Webpack you should check out the [initial concepts]
documentation. That should be enough to help you get around the main
configuration file: `theme/static/webpack.config.babel.js`. This is basically
what it does:

- Resolves all imports and converts ES6 modules to ES5.
- Takes the SASS stylesheet and converts it to CSS, adding browser prefixes.
- Dumps the resulting JS and CSS files (and any supporting files like images
  and fonts) into `static/build`.
- If ran in development mode (`npm run dev`), JS and CSS files will be watched
  for changes and the page will be autoreloaded (if using the LiveReload
  browser extension).
- If ran in production mode (`npm run build`), JS and CSS files will be
  minified before being emitted to `static/build`.

The Django template simply has to include the compiled static files (this is
already done in `base.html`):

```django
<link rel="stylesheet" href="{% static 'build/main.css' %}">
<script src="{% static 'build/main.js' %}"></script>
```

It's important to note that the `build/` folder is not kept under version
control. To deploy the bundled assets to production, the `fabfile` will execute
`npm run build` and copy the resulting files to the remote server. If you don't
use Fabric for deployments, you'll need to take care of that manually.

## Code quality

The project uses [eslint] and [stylelint] to check JS and SASS code for errors
and code style. They are both listed in the `devDependencies` and can be
executed over the entire frontend codebase with `npm run -s lint:js` and `npm
run -s lint:css` respectively. For convenience they will be executed one after
the other if invoked with `npm run -s lint`.

For Javascript we're following the popular [AirBnB style guide] with minor
modifications, which you can see in `theme/static/.eslintrc.js`. The ES6 to ES5
transpilation is handled by Babel, and configured by `theme/static/.babelrc`.

For SASS/CSS we're following the [standard configuration] and also the [RSCSS
style guide]. Above all, when writing CSS components, remember to keep them
small and focused, and add variants to a component instead of overriding styles
from container elements. The complete configuration is available at
`theme/static/.stylelintrc`.

Webpack will add browser prefixes using [autoprefixer], which is configured by
the file `theme/static/browserslist`.

We recommend that instead of running the linters manually you install a code
editor plugin that will automatically run them as you write your code. Both
eslint and stylelint have plugins available for Sublime Text, Atom, VS Code,
and more.

[pip]: https://pip.pypa.io/en/stable/
[npm]: http://npmjs.com/
[virtualenv]: https://virtualenv.readthedocs.org/en/latest/
[documented]: https://docs.npmjs.com/
[initial concepts]: https://webpack.js.org/concepts/
[eslint]: http://eslint.org/
[stylelint]: https://github.com/stylelint/stylelint
[AirBnB style guide]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[standard configuration]: https://github.com/stylelint/stylelint-config-standard
[RSCSS style guide]: http://rscss.io/
[autoprefixer]: https://github.com/postcss/autoprefixer
