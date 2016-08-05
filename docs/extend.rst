Extending Chassis
=================

Chassis includes a flexible extension system to allow setting up the server
exactly how you like.

Available Extensions
--------------------

This is a non-exhaustive list of what's available to drop into your Chassis box.

* `Mailcatcher`_: Hijack emails sent from WordPress, and display them in your
  browser to avoid cluttering your real inbox.

* `Memcache`_: Install a memcached server, and configure WordPress to use it
  automatically.

* `Redis`_: Install Redis server.

* `phpMyAdmin`_: Set up phpMyAdmin on your Chassis box

* `Tester`_: Install and configure PHPUnit, along with the WordPress additions
  so you can run plugin unit tests.

* `Theme Review`_: Set Chassis up for theme reviewing.

* `MailHog`_: A Chassis extension to install and configure MailHog on your server.

* `Cavalcade`_: Cavalcade is a replacement for WordPress' built-in cron that runs as a daemon on your system. It horizontally scales in production to ensure your scheduled tasks keep up with the scale of your site.

* `XDebug`_: A Chassis extension to install and configure Xdebug on your server.

* `Query Monitor`_: A Chassis extension to install and configure your Chassis WP install to use Query Monitor to help with debugging.

* `Debugging`_: A Chassis extension to install and activate common WordPress plugins used for debugging during development.

* `OpenSSL`_: A Chassis extension to install SSL.

.. _Mailcatcher: https://github.com/Chassis/mailcatcher
.. _Memcache: https://github.com/Chassis/memcache
.. _Redis: https://github.com/shadyvb/chassis-redis
.. _phpMyAdmin: https://github.com/Chassis/phpMyAdmin
.. _Tester: https://github.com/Chassis/Tester
.. _Theme Review: https://github.com/Chassis/themereview
.. _MailHog: https://github.com/Chassis/MailHog
.. _Cavalcade: https://github.com/Chassis/Cavalcade
.. _Xdebug: https://github.com/Chassis/Xdebug
.. _Query Monitor: https://github.com/Chassis/Query-Monitor
.. _Debugging: https://github.com/Chassis/Debugging
.. _OpenSSL: https://github.com/javorszky/chassis-openssl


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

Extensions are nothing more than a bit of convention and a Puppet manifest. An
extension is essentially a subdirectory of ``extensions/`` under your Chassis
root directory, containing a ``chassis.pp`` Puppet manifest. This manifest is
added to the Chassis manifests and run during a provision. It's also loaded in
at the same time as the rest of the Chassis Puppet files, so you can add your
own configuration and set up resource dependencies as needed.

If you need to load PHP in, Chassis also automatically adds a ``require`` block
for ``extensions/*/local-config.php``. Simply create this file, or use Puppet to
create it at ``/vagrant/extensions/<extension>/local-config.php`` and it'll be
loaded in via ``wp-config.php``.

For an example of how it's done, take a look at one of the existing extensions
linked above. The memcache extension includes an example of how to install a PHP
extension and automatically configure WordPress to use it, and is a very simple
introduction to the system.

Example: Installing The Memcached Extension
-------------------------------------------

To install the memcached extension you would do the following:

1. Open your terminal and navigate to your root Chassis folder.
2. `git clone git@github.com:Chassis/memcache.git extensions/memcache`.
3. `vagrant provision`.
