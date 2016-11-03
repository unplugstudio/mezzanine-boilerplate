# {{ project_name }}

A Mezzanine project based on [mezzanine-boilerplate].

## Quickstart

Note: You will have to manually create `{{ project_name }}/local_settings.py`.
You can find a template in the [mezzanine-boilerplate] repo. Also, make sure
you've installed the one-time dependencies.

```bash
# Clone the source from git or hg, then...
cd {{ project_name }}
# Create {{ project_name }}/local_settings.py
mkvirtualenv {{ project_name }}
cd theme/static
npm install
cd ../..
pip install -r requirements.txt
python manage.py createdb
python manage.py gruntserver
```

Get the static files and database from production (you must have the right
credentials in `local_settings.py`). For the database, you need to be using
Postgres both in the server and locally:

```bash
fab pullmedia # Get remote media files
fab pulldb # Get remote DB
```

Check the [mezzanine-boilerplate] docs for more info.

## Deployment

We are using [mezzanine-webf] to deploy to Webfaction. It is based on
Mezzanine's default Fabfile, but it will only work on Webfaction. You will have
to include Mezzanine's default deployment resources if you want to deploy to a
VPS.

[mezzanine-boilerplate]: https://gitlab.com/jerivas/mezzanine-boilerplate/blob/v1.4.0/README.md
[mezzanine-webf]: https://github.com/jerivas/mezzanine-webf/tree/v0.4.2
