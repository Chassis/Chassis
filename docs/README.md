# Documentation

This is the documentation for Chassis, written in reStructuredText, and
generated into the site at http://chassis.io/ by Read The Docs using Sphinx.

## Building documentation locally

You'll need to grab a copy of Sphinx (the documentation generator) and
associated tools first:

```bash
$ sudo pip install sphinx sphinx-autobuild sphinx_rtd_theme livereload==2.2.0
```

Then, to build:

```bash
$ sphinx-build -b dirhtml _build/dirhtml
```

You should now be able to access `_build/dirhtml/index.html` in a browser and
browse the documentation.
