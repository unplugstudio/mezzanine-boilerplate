## Packages
- Anaconda
- Djaneiro
- Emmet
- Emmet CSS Snippets
- Git
- Markdown Preview
- Mercurial for Sublime
- Monokai Neu
- nginx
- SublimeLinter
- SublimeLinter-jshint
- Syntax highlighting for Sass
- Terminal
- VCS gutter
- Wrap plus

## Preferences.sublime-settings
````json
// User settings
"atomic_save": false,
"folder_exclude_patterns":
[
	".svn",
	".git",
	".hg",
	"CVS",
	".sass-cache"
]
````

## Foobar.sublime-project
````json
{
	"folders":
	[
		{
			"path": ".",
			"folder_exclude_patterns":
			[
				"bower_components",
				"node_modules",
				".git",
				".hg",
				".sass-cache"
			]
		}
	],
	"settings": {
		"python_interpreter": "/path/to/virtualenv/bin/python",
		"rulers": [89],
		"pep8_max_line_length": 89,
		"ensure_newline_at_eof_on_save": true,
		"trim_trailing_white_space_on_save": true
	}
}
````

## Python (Django).sublime-settings

````json
{
	"tab_size": 4,
	"translate_tabs_to_spaces": true,
	"indent_to_bracket": true,
	"trim_trailing_white_space_on_save": true
}
````

## HTML (Django).sublime-settings
````json
{
	"extensions":
	[
		"html"
	],
	"tab_size": 2,
	"translate_tabs_to_spaces": false,
	"rulers": []
}
````

## CSS.sublime-settings
````json
{
	"tab_size": 4,
	"translate_tabs_to_spaces": false,
	"rulers": []
}
````

## SCSS.sublime-settings
````json
{
	"tab_size": 4,
	"translate_tabs_to_spaces": false,
	"rulers": []
}
````

## Markdown.sublime-settings
````json
{
	"rulers": [79]
}
````

## One-time dependencies
````
# Django/Mezzanine dependencies
sudo apt-get install libjpeg8 libjpeg8-dev postgresql python-pip git
sudo apt-get build-dep python-imaging
sudo pip install -U pip virtualenvwrapper mercurial
echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc

## Sass dependencies
sudo gem install sass

# NPM
sudo apt-get install npm
sudo npm update -g npm
ln -s /usr/bin/nodejs /usr/bin/node
chown -R $(whoami) ~/.npm

# Grunt and Bower
sudo npm install -g grunt-cli bower
````

## Get ready
````
sudo su - postgres
createuser -DRPS foobar
createdb foobar -O foobar

mkvirtualenv foobar
pip install mezzanine fabric django-debug-toolbar south psycopg2
mezzanine-project foobar
cd foobar
# Edit local_settings.py to use postgres
# Edit settings.py for TIMEZONE
# Add sublime-project
python manage.py createdb --noinput --nodata
# Commit: "Base installation of Mezzanine X.X.X."

django-admin.py startapp theme
# Add "theme" to INSTALLED_APPS before "mezzanine.boot"
# Edit TEMPLATE_DIRS = (os.path.join(PROJECT_ROOT, "theme", "templates"),)
# Commit: Added theme app.

mkdir -p theme/static
cd theme/static
# Copy this repo's static dir to theme/static
npm update --save-dev
bower install bootstrap-sass --save-dev
python manage.py collecttemplates -t base.html # theme/templates/base.html created
# All CSS is now at theme/static/css/style.css (Bootstrap + Custom styles)
# All JS is now at theme/static/js/scripts.js (jQuery + Bootstrap)
# Update base.html to point to new JS and CSS locations
# Commit: Added static resources and dependencies.

# From now on, CSS is generated with "grunt watch"
# JS with "grunt concat"
````
