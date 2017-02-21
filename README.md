# Mezzanine Boilerplate

Mezzanine Boilerplate aims to be a collection of sensible design patterns for
Mezzanine websites. It covers everything from frontend to backend, providing
rules for the most common cases while maintaining flexibility to make each
project unique. A Mezzanine project template is also provided for new Mezzanine
projects (see the Quickstart section).

## Overview

The current version of the boilerplate is 1.6, it makes use of the following
technology stack:

- Python 2.7 (though Python 3 should work too)
- Django 1.8 (we're sticking to a LTS version)
- Mezzanine 4.2
- Webpack 2
- Javascript (ES6)
- Sass

Make sure you're using the correct version of the boilerplate for each project!
You can explore the tags in this repository to look for the one that matches
your project.

## Quickstart

To quickly get started with a Mezzanine project, follow these steps. Make sure
you have installed the [one-time requirements] first.

```bash
# Create a new DB and DB user for the project
sudo su - postgres
createuser -DRPS project_name
createdb project_name -O project_name

# Get the latest version of the project template
git clone https://gitlab.com/jerivas/mezzanine-boilerplate.git

# Create the project
mkvirtualenv project_name
pip install mezzanine
mezzanine-project --template mezzanine-boilerplate/project_template --extension py,json,md,sublime-project project_name
cd project_name
pip install -r requirements.txt
# Stop, go update the DB settings to use Postgres in local_settings.py
# Also make sure you create migrations for the "theme" app
# You can also comment it out from INSTALLED_APPS for this initial run
python manage.py createdb --noinput --nodata

# Install npm dependencies
# By using `update` the versions will be updated in package.json.
cd theme/static
npm update --save
npm update --save-dev --only=dev

# Start Webpack to create the CSS and JS files
npm run dev

# Start the Django development server to actually serve the site
cd ../..
python manage.py runserver

# Now visit localhost:8000
```

## One-time requirements

Broadly speaking, you need to have the following installed globally in your
system. This will allow you to create any number of projects without issue.

- Git or mercurial
- Postgres database server
- Python 2.7, pip, and Python development utilities
- Flake8 (to get both PEP8 linting and error checking)
- virtualenv and virtualenvwrapper
- libjpeg
- Node JS (LTS version is preferred)
- npm (usually comes with Node)

In a Ubuntu machine, this should be enough:

```bash
# Django/Mezzanine dependencies
sudo apt-get install libjpeg8 libjpeg8-dev postgresql python-pip git npm
sudo apt-get build-dep python-imaging
sudo pip install -U pip virtualenvwrapper mercurial
echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
```

[one-time requirements]: #one-time-requirements
