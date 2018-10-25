Extending Chassis
=================

Chassis includes a flexible extension system to allow setting up the server
exactly how you like.

Find available extensions on the `Extensions Index`_.

.. _Extensions Index: http://beta.chassis.io/extensions/


Installing extensions
---------------------

Extensions can be :ref:`specified in your configuration <extension-format-ref>`,
and will be automatically downloaded by Chassis. You can also manually add
extensions.

Chassis automatically loads all subdirectories of your ``extensions/`` directory
as extensions, so extensions can be downloaded into this directory.


Example: Installing The Memcached Extension
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To install the memcached extension you would do the following:

1. Open your terminal and navigate to your root Chassis folder.
2. `git clone git@github.com:Chassis/memcache.git extensions/memcache`.
3. `vagrant provision`.


Globally installing extensions
------------------------------

In addition to per-project, extensions can be globally installed. This is useful
for development tools that you want to apply to all your Chassis boxes, which
aren't specific to any project.

Chassis loads global extensions from ``~/.chassis/extensions`` in the same way
that it loads project-specific extensions.

To install a global extension clone it into ``~/.chassis/extensions``. For
example, if you'd like to make the mailhog extension global then you would run
the following command in a terminal.

``git clone https://github.com/Chassis/Mailhog ~/.chassis/extensions/mailhog``

If a project includes an extension of the same name in its ``extensions/``
directory, the project's extension will be loaded instead of the
globally-installed extension.


Global extensions can also be disabled in the same way local extensions are
`disabled`_. e.g.

   disabled_extensions:
      - chassis/mailhog

.. _disabled: http://docs.chassis.io/en/latest/config/?highlight=disabled_extensions#extensions

Creating your own
-----------------

Chassis extensions can be created by anyone who knows the `Puppet configuration
language`_.

.. note::
   *"What's Puppet?"*, I hear you cry. Puppet is a tool that allows you to
   "provision" servers; that is, make them consistent by installing software
   packages and setting configuration. It also includes its own neat language
   for the configuration, giving it a huge amount of power.

   Before you get worried that we're crazy (although we might be), and that
   you're learning something useless, Puppet is one of the most widely used
   tools for configuring servers, and has a huge community behind it. Everyone
   from Twitter to the New York Times to Google uses Puppet to set up
   their servers. Anything you pick up here is applicable in the wider Puppet
   ecosystem too for setting up your own servers.

.. _Puppet configuration language: https://docs.puppetlabs.com/

Chassis internally uses Puppet to configure your virtual machine and set up all
the niceties that you've come to expect from Chassis, such as switching PHP
versions or configuring MySQL.

If you don't already know Puppet, we recommend reading the `Learning Puppet`_
series, which guides you into understanding and using Puppet. We've already got
Puppet set up and installed inside your Chassis virtual machine, so you can
follow any of the steps by simply running ``puppet`` inside the box.

.. _Learning Puppet: https://docs.puppetlabs.com/learning/introduction.html

Once you've got a grip on Puppet, we'd recommend having a quick read of how
Chassis works internally. We store all our files in the ``puppet/`` directory.


Extensions API (v2)
-------------------

.. note::
   Chassis v2 introduced a formal extensions API. This is a
   backwards-incompatible change from our initial extensions (now v1), so
   extensions need to opt-in with the ``chassis.yaml`` metadata file.

   If your extension does not specify the version, it will be assumed to be v1.
   This will generate a deprecation warning in the future, and may be removed,
   so it is highly recommended to update your extensions.

Making your own extension is easy. There's two required pieces for an
extension: an extension metadata file, and a Puppet class.

An extension exists as a subdirectory of the `extensions` directory in Chassis.
For example, the memcache extension lives in the `extensions/memcache/`
directory.

An example extension is included with Chassis, and lives in the
`extensions/example/` directory. We highly recommend reading the docs and code
inside this extension to understand how it works.


Extension Metadata
~~~~~~~~~~~~~~~~~~

Extensions specify information about themselves in the extension metadata file,
a YAML file specifying options to the extension. This metadata file lives at
``chassis.yaml`` inside your extension's directory.

Extensions **must** specify the following options:

- ``version``: Extension API version. Currently ``2``.

Extensions may also specify the following options:

- ``dependencies``: Extensions that the extension depends on. List of strings,
  where each string is an extension name (see :ref:`extension-format-ref`).


Puppet Class
~~~~~~~~~~~~

To integrate into Chassis' provisioning, Chassis loads a class with the same
name as your extension. This class must be defined in
``extensions/{name}/modules/{name}/manifests/init.pp``, and the name of the
class must match the extension's directory name.

This class receives a single hash parameter of ``$config``, which contains the
Chassis configuration specified in the ``config.yaml`` files.

Internally, Chassis registers ``extensions/{name}/modules`` as an additional
module path for Puppet. This means you can add third-party modules into your
``modules/`` directory as needed.

For example, an extension called ``example`` located in the
``extensions/example/`` directory would have the following class at
``extensions/example/modules/example/manifests/init.pp``::

  class example(
    $config
  ) {
    notify { "PHP version is ${config[php]}": }
  }

Currently, a class is always required, even if you don't need to provision
anything using Puppet. If you don't need provisioning, you can use an empty
class::

  class example( $config ) {}


WordPress Configuration
~~~~~~~~~~~~~~~~~~~~~~~

Chassis automatically loads ``local-config.php`` from your extension's
directory when loading ``wp-config.php``. If you need to run PHP inside the
WordPress context, use this file.

This file can be committed to your extension's repository, or provisioned by
Puppet, if you need to set additional settings.

For example, the memcache extension sets configuration for the object cache
inside WordPress to set the hostname. The ``local-config.php`` file hence
contains::

  <?php
  $memcached_servers = array( '127.0.0.1:11211' );
