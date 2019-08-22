Guides
======

.. highlight:: yaml

These guides will help you configure Chassis for specific types of development.

Migrations
----------

Importing A Production Database Into Chassis
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Use ``ssh`` to connect to your production server. Your host should provide instructions for doing this.
#. Export your production database with `WP-CLI`_ ``wp db export <filename.sql>``.
#. Download your the contents of your ``wp-content`` folder on production to your local content folder.
#. Provision a new Chassis instance.
#. Copy the export into the ``content`` folder.
#. Run ``vagrant ssh`` in a terminal to SSH into your Chassis box.
#. Run ``cd /vagrant/content``
#. Run ``wp db import <filename.sql>``
#. Run ``wp search-replace '//www.yoursite.com/wp-content' '//vagrant.local/content'``
#. Run ``wp cache flush``
#. Download your the contents of your ``wp-content`` folder on production to your local content folder.
#. Start developing.

Alternatively you can use the `SequelPro`_ or `phpMyAdmin`_ extensions to handle importing and exporting of your databases.

You could also look at using the `db_backup`_ extension. You can commit an SQL export as a file called ``chassis-backup.sql`` and it should automatically import on install. You will still need to search and replace the URLs.

.. _SequelPro: https://github.com/Chassis/SequelPro
.. _phpMyAdmin: https://github.com/Chassis/phpMyAdmin
.. _db_backup: https://github.com/Chassis/db_backup
.. _WP-CLI: https://wp-cli.org/

Exporting A Development Database Into A Production Database
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Add the production domain under ``- vagrant.local`` in ``content/config.local.yaml`` e.g. - ``www.yoursite.com``.
#. Reprovision with Puppet ``vagrant provision``.
#. SSH into your Chassis Box ``vagrant ssh``.
#. Use `WP-CLI`_ to search and replace e.g. ``wp search-replace '//vagrant.local' '//www.yoursite.com'``.
#. Use `WP-CLI`_ to search and replace the content urls. e.g. ``wp search-replace '//www.yoursite.com/content' '//www.yoursite.com/wp-content'``.
#. Export the database using `WP-CLI`_ ``wp db dump --add-drop-table``.
#. Log in to phpMyAdmin on your production server.
#. Drop the database on your site and import your database dump.
#. Upload your the contents of your ``content`` folder to your ``wp-content`` folder on production.
#. You're done!

N.B. If you getting the Error Establishing a Database Connection message then you'll probably need to edit the ``$table_prefix`` in ``wp-config.php``.

Alternatively you can use the `SequelPro`_ or `phpMyAdmin`_ extensions to handle importing and exporting of your databases.

.. _SequelPro: https://github.com/Chassis/SequelPro
.. _phpMyAdmin: https://github.com/Chassis/phpMyAdmin
.. _WP-CLI: https://wp-cli.org/

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
