import os

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.imgmath',
    'sphinx.ext.viewcode',
    'sphinx.ext.autosummary'
]

source_suffix = '.rst'
master_doc = 'index'
project = 'STUDIO 1'
version = u'SOFIA'
release = 'latest'
copyright = '2017, STUDIO1-SOFIA'
author = 'Rumen Lishkov'

# templates_path = ['_templates']
exclude_patterns = ['_build', 'docs', '.idea', '.gitignore' '.project', 'Thumbs.db', '.DS_Store']

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = 'sphinx'

# If truetodo and todoList produce output, else they produce nothing.
todo_include_todos = True

# -- Options for HTMLHelp output ------------------------------------------
html_theme = 'sphinx_rtd_theme'
html_static_path = ['static']

# html_theme_path = ["_themes", ]
# Theme style override

# Output file base name for HTML help builder.
# htmlhelp_basename = 'STUDIO 1'

if os.environ.get('READTHEDOCS') == 'True':
    style_file = '_static/theme.css'
else:
    html_style = 'theme.css'
    style_file = '_static/css/theme.css'

html_context = {
    'css_files': [style_file]
}
