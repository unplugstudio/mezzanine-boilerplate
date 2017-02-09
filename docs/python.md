# Writing Python code

## Architecture

When adding or customizing features for your Mezzanine site keep in mind the
following guidelines regarding architecture:

### IN GENERAL

- Follow the [Zen of Python].
- Follow the [Django philosophies].
- Leverage Mezzanine's [content architecture].

### SPECIFICALLY

#### Keep it short and sweet
Create many small applications/models/views that accomplish specific tasks,
instead of monolithic pieces of codes that do everything. In particular, try to
avoid cramming every model and view in the `theme` application. For example, if
your project requires a `TeamProfile` model, it should leave in it's own `team`
application.

#### Work's already been done for you!
Use as much of the goodies provided by Mezzanine as possible. In practice, this
means that the great majority of the models you'll write inherit from
`Displayable` or `Page`, and only define a few fields of their own. These
approach works so well that you can get away with writing applications that
only define models that inherit from `Page`, so they don't need url routing,
custom admin interfaces, or custom views.

#### ..but you have to do some yourself
On the other hand, know when it's time to roll your own solution or bring
third-party apps into the mix. Mezzanine's strength is management of Page-like
objects. For anything that starts looking more like a web *application* than a
web *site*, it might be worth to write your own models and views from scratch
or use a third-party application, with it's own admin section separate from the
`Page` tree.

#### Some things look better as tables
Use `TabularDynamicInlineAdmin` correctly. As the name implies, this inline
admin class works best with table-like data (a few, short fields). An example
of this is Mezzanine's own `Gallery` or `Form` models, that use it to display
gallery and form elements in a compact, easy-to-see-and-edit way.

#### ...others should be stacked
Use `StackedDynamicInlineAdmin` correctly. This inline admin is better suited
to displaying embedded models with longer and more fields. A general rule is
that if you're going to inline a model that has a `TextField` or
`RichTextField`, you should use this type of inline admin.

#### We all love drag-n-drop
Make most inlines inherit from `Orderable`. Both inline admin classes support
drag and drop ordering, and your users will be glad that they can order things
however they like, without worrying about the order in which is element is
created.

## Code style

Python code style adheres to [PEP8]. We recommend you follow all rules, except
the 80 character line limit. We've found that something from 89 to 100 is more
reasonable, but you're encouraged to set your own.

Please remember that a line-length limit has the purposes of:

- Improving readability.
- Discourage cramming too much into a single line.

Your limit of choice should achieve those purposes without being a burden to
the developer.

For actual linting of your Python code, we recommend [flake8]. It incorporates
PEP8 and adds checks for unused variables and imports among other things via
[pyflakes]. You can define custom rules for your project in a `tox.ini` file.

Finally, we also recommend that you lint as you code by using linter plugins in
your editor of choice. This removes the need of a linter step in your
tests/deployments, and will also make it easier to learn the rules as you write
code. Finding a linter plugin that supports flake8 is trivial for most well-
known editors.

*Note: Check the 'Editor' pages for custom configurations for popular editors.*

[Zen of Python]: https://www.python.org/dev/peps/pep-0020/
[Django philosophies]: https://docs.djangoproject.com/en/1.8/misc/design-philosophies/
[content architecture]: http://mezzanine.jupo.org/docs/content-architecture.html
[PEP8]: https://www.python.org/dev/peps/pep-0008/
[flake8]: http://flake8.readthedocs.org/en/latest/
[pyflakes]: https://pypi.python.org/pypi/pyflakes
