# Mezzanine Guidelines

## Quickstart
````
sudo su - postgres
createuser -DRPS foobar
createdb foobar -O foobar

git clone https://gitlab.com/jerivas/django-mezzanine-guidelines.git

mkvirtualenv foobar
pip install mezzanine
mezzanine-project --template django-mezzanine-guidelines/project_template --extension py,json,md,sublime-project foobar
cd foobar
pip install -r requirements.txt
python manage.py createdb --noinput --nodata

cd theme/static
npm install
cd ../..
python manage.py gruntserver
````

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

# Node version manager
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
source .bashrc

#Node (and npm)
nvm install 4.2.2 # Latest LTS
nvm alias default 4.2.2

# Grunt
npm install -g grunt-cli
````
