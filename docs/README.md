# Documentation

This is the documentation for Chassis, written in reStructuredText, and
generated into the site at http://chassis.io/ by Read The Docs using Sphinx.

## Building documentation locally

You'll need to grab a copy of Sphinx (the documentation generator) and
associated tools first:

```bash
$ sudo -H pip install Sphinx sphinx-autobuild sphinx_rtd_theme imagesize livereload==2.3.0
```

Then to build, run the `make html` within this documentation folder:

You should now be able to access `_build/dirhtml/index.html` in a browser and
browse the documentation.

### Building Offline Dash Documentation

We use [doc2dash](https://doc2dash.readthedocs.io/en/stable/) to generate offline documentation for [Dash](https://kapeli.com/dash).
If you wish to generate new documentation for Chassis then please to the following:

1. Run `pip install --user doc2dash`
1. Run `make html` inside the `docs` folder.
1. Run `doc2dash -A _build/dirhtml/ -n Chassis -f -I index.html` to generate the new docset.

### Troubleshooting

If you see the error `sudo: pip: command not found` while installing the documentation generator, then you'll need to install pip with the following command:

```
$ sudo easy_install pip
```
