Inside the Box
==============

While Chassis handles the setup of the virtual machine for you, it can be useful
to know exactly what's happening inside of it.


Networking
----------

Chassis VMs use the networking features provided by Vagrant and the underlying
VM management (VirtualBox, VMWare Fusion, etc). The VM is connected to the host
using a `private network`_, with a dynamically assigned IP address (unless a
static IP is :ref:`specified in your config <config-ip>`).

.. _private network: https://www.vagrantup.com/docs/networking/private_network.html

DNS resolution is handled by `Avahi`_, which is a Zeroconf/Bonjour service. This
responds to DNS-SD (DNS Service Discovery, also called mDNS) requests, which are
requested by the host for ``.local`` domains. This requires a DNS-SD daemon on
your host; macOS automatically includes this (Bonjour), most Linux systems also
include it (Avahi), and Windows `requires it to be installed`_ (`Bonjour for
Windows`_, installed automatically by iTunes, Skype, Adobe Creative Suite, and
others).

.. _Avahi: https://www.avahi.org/
.. _Bonjour for Windows: https://superuser.com/questions/491747/how-can-i-resolve-local-addresses-in-windows
.. _requires it to be installed: https://ctrl.blog/entry/windows-mdns-dnssd

For additional domain names specified in the config, and WordPress multisite
domains, other names are registered with Avahi using the ``chassis-hosts``
daemon (source in ``puppet/chassis-hosts.py``). Files inside the
``/etc/chassis-hosts/conf.d`` directory are automatically watched by the daemon,
and updates are pushed into the configuration on change. (The daemon uses D-Bus
to communicate with Avahi.)

``local-config-hosts.php`` attaches to the WordPress hooks for site creation,
deletion, and update, and writes all the domains it knows about into
``/etc/chassis-hosts/conf.d/subdomains``.


Synced Folders
--------------

Synced folders are handled by the VM manager. Chassis automatically uses the
default implementation provided by the VM manager, unless the ``nfs`` config
option is used.

Folders are set to be world-writable and world-readable (777) to ensure
compatibility with WordPress plugins that expect files to be writable.

By default, the Chassis root directory is synced to ``/vagrant``. When a custom
root directory is specified in the configuration, an additional synced folder is
set to map the root directory to ``/chassis`` on the system. If the ``wp`` or
``content`` directories aren't under the root directory, additional synced
folders are added for each to ``/chassis/wp`` and ``/chassis/content``
respectively.


Nginx
-----

HTTP requests are served up by nginx.

For single-site WordPress, the ``site.nginx.conf.erb`` template (in
``puppet/modules/chassis/templates``) is used, while
``multisite.nginx.conf.erb`` is used for multisite configuration. These
templates are used to generate the site's configuration, which is placed in
``/etc/nginx/sites-available/<domain>``, and symlinked into
``/etc/nginx/sites-enabled``.

The primary nginx configuration is loaded from ``/etc/nginx/nginx.conf`` by the
system, and this file is provisioned from the ``nginx.conf.erb`` template. This
is a standard nginx setup, based on the file bundled with the Ubuntu package.

Further configuration files are included by the main configuration, which loads
in ``/etc/nginx/*.conf`` to allow for further system-level configuration. The
site config also loads ``/etc/nginx/sites-available/<domain>.d/*`` to allow
Chassis extensions to further configure sites.

For any request not for a specific file, nginx passes the request via FastCGI to
PHP.


PHP
---

PHP runs in FastCGI mode (``php-fpm``), using a Unix socket at
``/var/run/php5-fpm.sock``. The PHP configuration at
``/etc/php/<version>/fpm/php.ini`` is provisioned from the ``php.ini.erb``
template. This is a standard PHP configuration based on the ``php.ini`` included
in the Ubuntu package. The CLI configuration is also provisioned to the same
template into ``/etc/php/<version>/cli/php.ini``.

Additionally, PHP loads all files from ``/etc/php/<version>/fpm/conf.d`` (and
corresponding CLI directory) in alphabetical order. Chassis extensions can place
additional configuration into this directory. PHP extensions installed via
packages (e.g. ``php-xdebug``) will automatically place configuration into this
directory to load the extension (typically with a filename like
``10-xdebug.ini``).

Database
--------

The root MySQL credentials, if you need them, are:

**Username**: ``root``

**Password**: ``password``
