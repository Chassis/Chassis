Configuration
=============

.. highlight:: yaml

The core of Chassis is designed around you having everything needed for your
site-specific code in the ``content/`` directory. This includes project-specific
configuration (we load ``content/config.php`` in during ``wp-config.php``
loading) and your plugins and themes. This is designed such that you can keep
your site self-contained in a separate repository, including API keys and such.

We also load 4 configuration files, allowing you to store project-specific
configuration while still allowing overriding:

* ``project/content/config.local.yaml`` - project-specific overrides
* ``project/content/config.yaml`` - project-specific defaults
* ``project/config.local.yaml`` - global overrides
* ``project/config.yaml`` - global defaults

This allows you to (e.g.) enable multisite for the entire project, while
allowing specific users to override the hostname if it conflicts with existing
projects.

Changing your Chassis box is a quick two-step process:

1. Change the relevant configuration file as above and save
2. Run ``vagrant provision``

``vagrant provision`` tells Vagrant to update the box with your new settings,
and should take care of updating everything internally.


PHP Version
-----------

**Key**: ``php``

PHP 5.4 is included with Chassis by default, plus we register the additional
repositories for the other versions. We don't download them all automatically,
to avoid extra download times, but switching is still pretty fast as we
pre-register the APT repositories.

To switch to 5.3 for example:

1. Add ``php: 5.3``
2. Run ``vagrant provision``

You can use either a two-part version (``5.3``) or a three-part version
(``5.3.1``) if you want to pick specifc versions. We support any version between
5.3.0 and 5.6.x.


WordPress Directory
-------------------

**Key**: ``wpdir``

Chassis also includes the latest-released version of WordPress by default, but
we also allow swapping this out completely for users who want the flexibility.
Our built-in version follows the pattern laid out by `WordPress Skeleton`_,
however you can change this easily if you want.

For example, to swap out the `current version of WordPress`_ for the latest
development version:

1. Clone ``https://github.com/WordPress/WordPress.git`` to ``wp-trunk/``
2. Add ``wpdir: wp-trunk`` to your ``config.local.yaml``
3. Run ``vagrant provision``

We want to make this as flexible as possible, without forcing you to run through
any of these steps if you don't need to.

.. _WordPress Skeleton: https://github.com/markjaquith/WordPress-Skeleton
.. _current version of WordPress: https://wordpress.org/download/


Multisite
---------

**Key**: ``multisite``

Chassis includes built-in support for WordPress multisite, with both
subdirectories and subdomains. This is turned off by default, but can be turned
on easily.

* For multisite in subdirectories, set ``multisite: Yes``
* For multisite on subdomains, set ``multisite: subdomains``

Then just reprovision.

When multisite is turned on, Chassis will set up WordPress in "subdirectory"
mode; that is, sites will be created under the root, but using the same domain.
A site called "test" would be created at ``/test/``, for example.

Subdirectory mode is great, but subdomain mode is even better. With subdomains,
a site called "test" would be available at ``test.vagrant.local``. This is one of
the most common ways that multisite is set up, since it also means you're
separating your sites more cleanly. Simply set the value to ``subdomains`` and
reprovision. Once this is done, subdomains will work automatically in your
browser. Create and remove sites at will, and Chassis will ensure it just works.

.. note::
   Changing from multisite back to single site requires creating the box from
   scratch, using ``vagrant destroy`` before running ``vagrant up``. This is due
   to WordPress' inability to switch back.

   This will wipe your database, so make sure you export any sites' content that
   you need (via the WordPress exporter).


Default Admin
-------------

**Key**: ``admin``

When you first set up your site, Chassis will install WordPress and create the
default admin user for you. By default, this user is set up as `admin` with the
password `password` to keep it simple for local development.

To change this, simply set the ``admin`` configuration option to different
values, like so::

   admin:
       user: admin
       email: admin@example.com
       password: password

.. warning::
   You must include all lines shown above (albeit with your custom
   configuration), even if you're not changing from the default.

   Note also that the indentation must be done with **spaces, not tabs** in
   YAML configuration.


Database Configuration
----------------------

**Key**: ``database``

Similar to the admin user configuration, you can also override the default MySQL
username and password::

   database:
       name: wordpress
       user: wordpress
       password: vagrantpassword

(Again, don't forget to include all lines, and use spaces for indentation.)


Custom Host Names
-----------------

**Key**: ``hosts``

By default, Chassis will set up ``vagrant.local`` as your main domain. If you'd
like to change this, you can override the ``hosts`` configuration item. Note
that this is a list, so it should have list items in the following format::

   hosts:
       - vagrant.local
       - althost.local

The first host here will be set as the main host for the box and in WordPress.
Subsequent hosts will be set as aliases of the main domain using nginx, and may
be redirected by WordPress depending on your configuration or plugins.

.. note::
   Domains ending in something other than `.local` won't have DNS set up for
   them automatically, so make sure to add these to your hosts file on your
   computer (not inside the virtual machine).

   If you need to find out the IP address of your machine, run ``vagrant ssh``
   to connect, then inside the box run ``ifconfig eth1`` and look for the line
   starting with ``inet addr:``.


IP Address
----------

**Key**: ``ip``

Chassis picks an IP address for your box automatically, using DHCP. If you'd
prefer a static IP, you can specify this here with ``ip: 192.168.1.114``

(Typically, this should be in the private routing range; either ``192.168.x.x``
or ``10.x.x.x``)


APT Mirror
----------

**Key**: ``apt_mirror``

To speed up package installation, Chassis will tell Ubuntu to use the closest
mirror to you, rather than the main mirror (``ubuntu.com``). This typically
speeds up installation by decreasing latency, however it may cause slowness with
some slower or badly-behaving mirrors.

You can tell Chassis to avoid doing this by setting ``apt_mirror: No``

If you have a specific mirror you'd like to use, you can set this as the value
instead, such as:

.. code-block:: yaml

   apt_mirror: http://mirror.optus.net/ubuntu/


Synced Folders
--------------

**Key**: ``synced_folders``

You may want to keep your themes and projects along-side Chassis, instead of
inside it. You'll need to tell Chassis about these external directories, as it
won't know how to map them. You can tell Chassis to map some external directories
into the generated VM like so:

.. code-block:: yaml

   synced_folders:
     a/host/directory: a/vm/directory
     "this:ones:got:colons": another/vm/directory