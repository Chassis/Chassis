Guides
======

.. highlight:: yaml

These guides will help you configure Chassis for specific types of development.

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

2. **Install ngrok**

   Vagrant Share requires ``ngrok`` to be installed on the host machine.
   You can verify if this is installed by running ``which ngrok`` in a terminal. If there is no output then you will need to download and install `ngrok`_.
   Once you've downloaded ``ngrok`` unzip it: ``unzip /path/to/ngrok-stable-darwin-amd64.zip``
   Move ngrok: ``mv /path/to/ngrok /usr/local/bin/ngrok``

3. **Run Vagrant Share**

   You now need to run ``vagrant share --http=vagrant.local:80``. If you're using a custom domain then you will need to use that e.g. ``vagrant share --http=<your-custom-domain>.local:80``.
   You will then have a temporary URL generated for you. e.g. ``http://<id>.ngrok.io``. You need to leave this running in the background.

4. **Alter your Chassis config**

   Alter one of your Chassis config files to include the additional subdomain. e.g.

.. code-block:: yaml

   hosts:
       - vagrant.local
       - <id>.ngrok.io

5. **Reprovision Vagrant**

   You now need to run ``vagrant provision`` and you should be able to access your Chassis box with the URL generated in Step 2.

Debugging
~~~~~~~~~

If you see an error when you run ``vagrant provision`` then try running it again.
If you're still having trouble accessing the URL try a ``vagrant reload`` after you've run a successful ``vagrant provision``

.. _ngrok: https://ngrok.com/download
.. _Vagrant Share plugin: https://www.vagrantup.com/docs/share/
