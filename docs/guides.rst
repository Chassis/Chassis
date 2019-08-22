Guides
======

.. highlight:: yaml

These guides will help you configure Chassis for specific types of development.

WP-CLI
------

`WP-CLI`_ is the command-line interface for WordPress. You can update plugins, configure multisite installations and much more, without using a web browser.

We bundle the latest version of WP-CLI in Chassis. You can access WP-CLI by running ``vagrant ssh`` from a terminal. You can check the WP-CLI details by running ``wp --info`` inside the Chassis box.
This should result in something like the following:

   vagrant@vagrant:~$ wp --info
   OS:	Linux 4.4.0-150-generic #176-Ubuntu SMP Wed May 29 18:56:26 UTC 2019 x86_64
   Shell:	/bin/bash
   PHP binary:	/usr/bin/php7.3
   PHP version:	7.3.8-1+ubuntu16.04.1+deb.sury.org+1
   php.ini used:	/etc/php/7.3/cli/php.ini
   WP-CLI root dir:	phar://wp-cli.phar/vendor/wp-cli/wp-cli
   WP-CLI vendor dir:	phar://wp-cli.phar/vendor
   WP_CLI phar path:	/home/vagrant
   WP-CLI packages dir:
   WP-CLI global config:	/home/vagrant/.wp-cli/config.yml
   WP-CLI project config:
   WP-CLI version:	2.3.0

WP-CLI Commands
~~~~~~~~~~~~~~~

You can see a full list of WP-CLI commands by running ``wp help`` inside your Chassis box. Some common commands are as follows:

* ``wp config list`` - Lists variables, constants, and file includes defined in wp-config.php file.
* ``wp cron event list`` - Lists scheduled cron events.
* ``wp cron event run`` - Runs the next scheduled cron event for the given hook.
* ``wp plugin list`` - Gets a list of plugins.
* ``wp plugin install <plugin_slug> --activate`` -- Install and activate a plugin from the WordPress plugin directory.
* ``wp post list`` - Gets a list of posts.
* ``wp post-type list`` - Lists registered post types.
* ``wp search-replace <old> <new>`` - Searches through all rows in a selection of tables and replaces appearances of the first string with the second string. Add the ``--dry-run`` parameter to test without making changes.
* ``wp shell`` - Evaluate PHP statements and expressions interactively, from within a WordPress environment. e.g. ``get_bloginfo( 'name' );``
* ``wp site empty`` - Empties a site of its content (posts, comments, terms, and meta).
* ``wp site create --slug=awesome`` - Creates a site in a multisite installation.

There is extensive documentation and examples of all the WP-CLI commands on the `WP-CLI`_ website.

.. _WP-CLI: https://wp-cli.org/

WP-CLI Packages
~~~~~~~~~~~~~~~

WP-CLI has additional `WP-CLI packages`_ which can be installed to add additional helper commands for your WordPress development needs.

We have made a `Chassis WP-CLI extension`_ that allows you to automatically install WP-CLI packages which have been published in the package index.

For example you could add the following section to one of your ``.yaml`` configuration files to automatically install the Chassis WP-CLI extension and the `WP-CLI Server`_ command.

.. code-block:: yaml

   wp_cli:
    packages:
        - wp-cli/server-command
        - wp-cli/restful

.. _WP-CLI packages: https://wp-cli.org/package-index/
.. _Chassis WP-CLI extension: https://github.com/Chassis/WP_CLI
.. _WP-CLI Server: https://github.com/wp-cli/server-command

WordPress Core Development
--------------------------

An SVN or Git checkout of WordPress can be mapped as Chassis' ``wp/`` directory to enable development of WordPress Core.

Directory Structure
~~~~~~~~~~~~~~~~~~~

If you've installed Chassis into a folder such as ``wpcore-box``, use SVN or Git to clone ``develop.svn.wordpress.org`` (or ``develop.git.wordpress.org``, depending on how you develop) into a sibling directory. For example:

- ``wordpress-development/``
    - ``wpcore/``: A clone of WordPress from ``develop.svn`` or ``develop.git``
    - ``wpcore-box/``: Chassis

Tester Extension
~~~~~~~~~~~~~~~~

The `Tester`_ extension adds and configures PHPUnit for WordPress tests. You can install other extensions if you want, but there's nothing else required.

.. _Tester: https://github.com/Chassis/Tester

Configuration
~~~~~~~~~~~~~

Save this configuration as ``config.local.yaml`` in the Chassis root directory to configure Chassis to look for WordPress in your ``wpcore/`` checkout.

.. code-block:: yaml

   paths:
       # Use the Chassis box normally...
       base: .
       content: content

       # But use my development copy of WordPress for the WP source
       wp: ../wpcore/src

   # Also use your development copy of WordPress for the unit test
   # framework, and for the unit tests themselves
   synced_folders:
       ../wpcore: /vagrant/extensions/tester/wpdevel

   # Set the host to ``core.local`` to distinguish from other chassis boxes
   hosts:
       - core.local

   # Explicitly set database configuration to avoid warning with Tester
   database:
       name: wordpress
       user: wordpress
       password: vagrantpassword
       prefix: wp_

   # Run in multisite mode (totally optional)
   multisite: true

WordPress will now be loaded from the ``wpcore/`` checkout, not the ``wp/`` directory within Chassis. However, in order for WP-CLI and other tools to be able to find Chassis' ``wp-config.php`` we need to add a dummy configuration file at ``wpcore/src/wp-config.php``:

.. code-block:: php

   <?php
   // Fool WP-CLI into recognising this as a valid config file
   if ( false ) {
       require ABSPATH . './wp-settings.php';
   }

   require '/vagrant/wp-config.php';

In normal circumstances editing Chassis' own ``wp-config.php`` file is discouraged in favor of using ``local-config.php``. However in this case you're working around WP-CLI with the dummy ``wp-config.php`` file, so you will need to make one change to Chassis' own ``wp-config.php`` file to wrap the line which requires ``wp-settings.php`` in a conditional check:

.. code-block:: php

   if ( ! defined( 'WP_CLI' ) ) {
       require_once( ABSPATH . 'wp-settings.php' );
   }

This will prevent WP-CLI from loading ``wp-settings.php`` twice.

With this configuration you should now be ready to develop against WordPress Core.

Vagrant Share
-------------

Vagrant Share enables the ability to generate a temporary URL which you can share with people to allow them access to your local Chassis installation.

1. **Install Vagrant Share**

   Run the following command in a terminal to install the `Vagrant Share plugin`_. ``vagrant plugin install vagrant-share``.

2. **Install ngrok Version 2.2.8**

   Vagrant Share requires ``ngrok`` 2.2.8 to be installed on the host machine.
   You can verify if this is installed by running ``which ngrok`` in a terminal. If there is no output then you will need to download and install `ngrok`_.
   Once you've downloaded ``ngrok`` unzip it: ``unzip /path/to/ngrok-2.2.8-darwin-amd64.zip``
   Move ngrok: ``mv /path/to/ngrok /usr/local/bin/ngrok``

3. **Run Vagrant Share**

   You now need to run ``vagrant share --http=vagrant.local:80``. If you're using a custom domain then you will need to use that e.g. ``vagrant share --http=<your-custom-domain>.local:80``.
   You will then have a temporary URL generated for you. e.g. ``http://<id>.ngrok.io``. You need to leave this running in the background.

4. **Share your site**

   Navigate to the URL that ngrok generated.

**Note**: ngrok Version 2.2.8 is required due to this known `bug`_

Debugging
~~~~~~~~~

If you see an error when you run ``vagrant provision`` then try running it again.
If you're still having trouble accessing the URL try a ``vagrant reload`` after you've run a successful ``vagrant provision``

.. _ngrok: https://dl.equinox.io/ngrok/ngrok/stable/archive
.. _Vagrant Share plugin: https://www.vagrantup.com/docs/share/
.. _bug: https://github.com/hashicorp/vagrant/issues/10799
