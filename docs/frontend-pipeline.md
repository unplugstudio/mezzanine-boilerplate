# Frontend pipeline

The boilerplate encourages you to use a modern approach to manage your frontend
code (CSS and Javascript). Basically, we want to achieve the following:

- Avoid keeping track of third-party dependencies (like jQuery) in the
  project's repository.
- Support explicit importing/inclusion of CSS and JS dependencies. This
  contrasts with the popular approach of relying on the global namespace of CSS
  and JS to "share" code on the application level.
- Follow better development practices in frontend programming, like loose
  coupling, reusable code, and DRYness.

In practice, this means following some encapsulation and file organization
rules, and using a task runner to handle dependencies and bundling.

## Package (dependency) management

You're most likely familiar with [pip], the recommended tool for installing
Python packages. If a Python package wants to be widely available, making it
pip-installable is the way to go. In the Javascript world (and the frontend
world for the purpose of this document), the equivalent is [npm], or Node
Package Manager. Don't let the name throw you off, it is not limited to Node
packages, it is arguably the best way to get and manage web-development related
software.

npm will allow us to do in the frontend what we already do in the backend with
pip. Namely, we will be able to list dependencies in a file that will be
tracked in VCS and ensure that all developers share the same environment
without the need of tracking third-party software in the project's repository.

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
  docs's home.
- Always save new packages to `packages.json` with `npm install some_package
  --save`.
- Keep your version of npm up to date, and make sure all devs are using the
  same version.
- Use npm to handle all frontend dependencies. We want to avoid tracking
  third-party code as much as possible. If a package is not on npm, you may be
  able to install from GitHub or even package and publish it yourself.

## Task runner

We use the term task runner to refer to a tool that takes all our frontend code
and "builds" it into something that browsers can understand out of the box. In
most cases, this means resolving package dependencies, compiling (or
transpiling) code, concatenating files, etc. Many tools exist for this purpose
in the frontend realm, but the one recommended by the boilerplate is [Grunt].
It is widely adopted, documented, and has an extensive plug-in ecosystem.

Grunt needs a configuration file that tells it what tasks to perform. The
boilerplate provides such file in `theme/static/Gruntfile.js`. In this file, we
define several tasks:

- Sass: Transform the specified .scss file into a standard .css file.
- Autoprefixer: Add browser-specific CSS prefixes to achieve maximum style
  compatibility.
- Concat: Concatenate (join) the specified files into one.
- Watch: Keep track of changes in .scss and .js files to automatically re-run
  the previous three tasks.

To start the task runner, simply run `grunt` while on `theme/static`. This will
perform all tasks once and then keep watching for file changes. You can exit
with `Ctrl + C`. Note that you must have installed the one-time dependencies
explained in the doc's home.

For convenience, a custom management command has been provided to start `grunt`
any time you start Django's development server. The command is `gruntserver`,
and it behaves exactly like `runserver`. For most cases, running `gruntserver`
is all you need to do to get all this working.

Finally, the `watch` task has [livereload] support enabled by default. Simply
enable live reloading in your browser and visit the development site while
Grunt is running. Static assets will be reloaded automatically whenever they
change.

## CSS and Javascript code

The specifics to each of these components are explained on their own pages.

[pip]: https://pip.pypa.io/en/stable/
[npm]: http://npmjs.com/
[virtualenv]: https://virtualenv.readthedocs.org/en/latest/
[documented]: https://docs.npmjs.com/
[Grunt]: http://gruntjs.com/
[livereload]: https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
