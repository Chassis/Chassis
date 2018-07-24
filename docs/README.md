# Documentation

This is the documentation for Chassis, written in reStructuredText, and
generated into the site at http://chassis.io/ by Read The Docs using Sphinx.

## Building documentation locally

You'll need to grab a copy of Sphinx (the documentation generator) and
associated tools first:

```bash
$ sudo -H pip install Sphinx sphinx-autobuild sphinx_rtd_theme imagesize livereload==2.3.0
```

Then to build, run the `sphinx-build` within this documentation folder:

```bash
$ sphinx-build -b dirhtml . _build/dirhtml
```

You should now be able to access `_build/dirhtml/index.html` in a browser and
browse the documentation.

### Troubleshooting

If you see the error `sudo: pip: command not found` while installing the documentation generator, then you'll need to install pip with the following command:

```
$ sudo easy_install pip
```
