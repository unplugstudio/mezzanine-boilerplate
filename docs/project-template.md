# Project template

The project template should have everything you need to start developing the
frontend and backend of a Mezzanine site. In this document we explain
everything that's included in the template.

## Root folder

The root folder (and the inner folder that holds `settings.py`) are just a
standard Mezzanine project with the following customizations:

- The `theme` app has been added to `settings.INSTALLED_APPS`.
- The `mezzy` app has also been added to `settings.INSTALLED_APPS`. It provides
  useful utilities for Mezzanine projects. [Learn about Mezzy].
- The path `theme/templates` has been set as the default template directory in
  `settings.TEMPLATES`.
- Forms will use HTML5 inputs by default since `settings.FORMS_USE_HTML5` is
  set to `True`.
- The `console` email backend is used by default in development (defined in
  `local_settings.py`).
- The default path for the Gruntfile is defined in `settings.GRUNT_PATH`. See
  the [Theme App] section for more details.
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

- The basic `SiteConfiguration` model and admin.
- The `templates` directory with a sample `base.html` that will be picked by
  Mezzanine.
- A custom template tag: `{% load_theme %}`, that enables adding the
  `SiteConfiguration` variables to any template. See `base.html` for example
  usage.
- The `package.json` file where all frontend dependencies are listed. Think of
  this as the Javascript equivalent to Python's requirements file.
- The `Gruntfile` configuration file. It describes the behavior of the `grunt`
  task runner, the part of the stack that is in charge of collecting,
  processing, and bundling scripts and stylesheets for the project.
- The `static/js` folder, where you can store all scripts that `grunt` will
  process.
- The `static/scss` folder, where you can store all the stylesheets that
  `grunt` will process. This folder also contains a comprehensive template to
  get started with site styles.

*Special shoutout to Josh Cartmell for developing and sharing the
[SiteConfiguration approach] with the Mezzanine community.*

[Learn about Mezzy]: https://gitlab.com/tigris-webdev/mezzy
[Theme App]: #theme-application
[mezzanine-webf]: https://github.com/jerivas/mezzanine-webf
[Webfaction]: http://webfaction.com
[SiteConfiguration approach]: http://bitofpixels.com/blog/on-singletonadmins-and-sitewidecontent-editing-sitewide-content-in-mezzanines-admin/
