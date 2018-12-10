Quickstart
==========

So you want to get Chassis running? Fantastic! We'll be here to guide you
through the process.

For now, we're going to speed through some of these commands to get you started
as quickly as possible. We've got a :doc:`command reference </reference>`
waiting for you later.

.. highlight:: bash

.. note::
   Psst, if you haven't seen the notation before, lines starting with ``$``
   indicate commands you can type in, and other lines are output. Don't include
   the ``$`` when typing!


Prerequisites
-------------

Before using Chassis, this is how your system should be set up:

* Install `VirtualBox`_
* Install `Vagrant`_
* Make sure you have Zeroconf networking (Bonjour) set up:

  * **OS X**: You already have Bonjour available.

  * **Windows**: If you have Bonjour Print Services or Creative
    Cloud installed, you already have Bonjour.

    Otherwise, you need to install Bonjour on your system. The easiest way to
    do this is to `install Bonjour Print Services`_. If you'd prefer not to do this, you
    can follow `these instructions <Bonjour_>`_ to install just Bonjour.

  * **Linux**: You need to have Avahi installed on your system.

    For Ubuntu::

        $ sudo apt-get install avahi-dnsconfd

.. _VirtualBox: https://www.virtualbox.org/wiki/Downloads
.. _Vagrant: http://www.vagrantup.com/downloads.html
.. _install Bonjour Print Services: https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US
.. _Bonjour: http://help.touch-able.com/kb/network-setup-windows/make-sure-that-bonjour-is-installed-on-your-windows-pc


Installing
----------

1. Clone the Chassis repo::

       $ git clone --recursive https://github.com/Chassis/Chassis <myproject>

   If you forget ``--recursive`` then run::

       $ git submodule update --init

   .. note::
      Replace ``<myproject>`` with your preferred directory name.

2. Install your WordPress project:

   * **If you have an existing project**:

     Clone the content/ directory!

     ::

         $ cd <myproject>
         $ git clone git@github.com:yourcompany/yourproject.git content

   * **If you are starting a new project**:

     You will need to create a content folder::

         $ cd <myproject>
         $ mkdir -p content/{themes,plugins}

3. Boot up a Virtual Machine::

       $ vagrant up

   .. note::
      New Vagrant and VirtualBox users may see this error:
      ``Stderr: VBoxManage: error: DHCP server already exists``

      This error typically occurs when Vagrant and VirtualBox are both fresh
      installs, and you haven't used the networking tools before. This can be
      fixed by upgrading to Vagrant 1.7.0 or newer. (For older versions, a
      `workaround <DHCP VirtualBox_>`_ is available)

.. _DHCP VirtualBox: https://github.com/Chassis/Chassis/wiki/dhcp-private_network-failing-on-VirtualBox

4. Make a copy of ``local-config-sample.php`` and rename to ``local-config.php``

5. Browse to http://vagrant.local and you should see your site! The default
   login credentials are ``admin`` and ``password`` and the login URL is http://vagrant.local/wp/wp-admin.


What's in the box?
------------------

By default we want to keep Chassis lean, below is a list of what we include:

* `WordPress`_ (latest stable version)
* `PHP`_ (version 7.0) (includes the `cURL <cURL extension_>`_ and `GD`_ extensions)
* `nginx`_
* `MySQL`_

Some tools including `Git`_ and `cURL`_ are installed during setup, but you
shouldn't rely on these being available. Many more are available as default
Ubuntu utilities.

Note that some tools like phpMyAdmin and Memcache are available instead as
:doc:`extensions </extend>`, which are installed separately to keep
Chassis fast.

.. _WordPress: https://wordpress.org/
.. _PHP: http://www.php.net/
.. _cURL extension: http://www.php.net/manual/en/book.curl.php
.. _GD: http://www.php.net/manual/en/book.image.php
.. _nginx: http://nginx.org/
.. _MySQL: http://www.mysql.com/
.. _Git: http://git-scm.com/
.. _cURL: http://curl.haxx.se/

Rather than providing everything under the sun, we provide a set of sensible
defaults, along with the ability to change this as needed. This helps keep
Chassis fast by designing for the common use-case first. This flexibility comes
from two core parts: :doc:`configuration </config>`, and
:doc:`extensions </extend>`.


Updating
--------

If you ever want to update Chassis, here's a quick two-step procedure::

   # Pull and rebase (in case you have project-specific commits)
   git pull --rebase

   # Update submodules (Puppet modules)
   git submodule update --init
   
   # Update WP
   git pull
