# Project template

The project template should have everything you need to start developing the
frontend and backend of a Mezzanine site. In this document we explain
everything that's included in the template.

## Root folder

The root folder (and the inner folder that holds `settings.py`) are just a
standard Mezzanine project with the following customizations:

- The `theme` app has been added to `settings.INSTALLED_APPS` (but is commented
  out for you to enable later).
- The `mezzy` app has also been added to `settings.INSTALLED_APPS`. It provides
  useful utilities for Mezzanine projects. [Learn about Mezzy].
- The path `theme/templates` has been set as the default template directory in
  `settings.TEMPLATES`.
- Forms will use HTML5 inputs by default since `settings.FORMS_USE_HTML5` is
  set to `True`.
- The `console` email backend is used by default in development (defined in
  `local_settings.py`).
- The main `urls.py` uses a Page as homepage, instead of a static template.
- A blank `README.md` has been included with minimal project information.
- The `requirements.txt` file includes `psycopg2`, `fabric` and `django-debug-
  toolbar`.
- A `project_name.sublime-project` file is included for basic configuration for
  Sublime Text users.
- The default fabfile and the files in `deploy/` are substituted by the ones
  provided by [mezzanine-webf]. The default `FABRIC` settings have also been
  modified to deploy to [Webfaction].
- `settings.COMPRESS_CSS_FILTERS` is set to minify and concatenate CSS assets
  in production. By default, Django Compressor only concatenates.

## `theme` application

The `theme` folder is a standard Django application, and it serves two
purposes. First, to define a model and admin interface that stores site wide
configuration for site staff (like logo, default values, etc). Second, to
contain all frontend customizations for the site (templates, scripts, and
stylesheets).

To that end, it includes the following:

- The basic `SiteConfiguration` model and admin. This is just a starting point,
  migrations are not included.
- The `templates` directory with a sample `base.html` that will be picked by
  Mezzanine.

And inside `theme/static`:

- The `package.json` file where all frontend dependencies are listed. It also
  defines common tasks like running the development and production builds,
  linting the JS and CSS resources, and more.
- The `webpack.config.babel.js` configuration file used by Webpack to compile
  scripts and stylesheets into the `build` folder.
- The `js` folder, where you can store all Javascript modules that Webpack will
  process. Notice ES6 support is enabled, so you can use the latest JS syntax
  and module importing features.
- The `scss` folder, where you can store all the stylesheets that
  webpack will process. This folder also contains a comprehensive template to
  get started with site styles.
- Other configuration files (`.eslintrc.js`, `.babelrc`, `.stylelintrc`,
  `browserslist`).

For more information visit the Frontend Pipeline docs.

*Special shoutout to Josh Cartmell for developing and sharing the
[SiteConfiguration approach] with the Mezzanine community.*

[Learn about Mezzy]: https://gitlab.com/tigris-webdev/mezzy
[mezzanine-webf]: https://github.com/jerivas/mezzanine-webf
[Webfaction]: http://webfaction.com
[SiteConfiguration approach]: http://bitofpixels.com/blog/on-singletonadmins-and-sitewidecontent-editing-sitewide-content-in-mezzanines-admin/
