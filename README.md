## Packages
- Djaneiro
- Emmet
- Emmet CSS Snippets
- Git
- Markdown Preview
- Mercurial for Sublime
- Monokai Neu
- nginx
- PyV8
- SublimeLinter
- SublimeLinter-flake8
- SublimeLinter-jshint
- Syntax highlighting for Sass
- Terminal
- VCS gutter
- Wrap plus

## Foobar.sublime-project
````json
{
	"folders":
	[
		{
			"path": "."
		}
	],
	"SublimeLinter":
	{
		"linters":
		{
			"flake8": {
				"max-line-length": 89,
				"exclude": ["E501", "E731"]
			}
		}
	},
	"settings": {
		"rulers": [89],
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
# Ignore *.sublime-workspace

python manage.py createdb --noinput --nodata
python manage.py runsver
git init
git add .
git ci -m "Initial commit."
````
