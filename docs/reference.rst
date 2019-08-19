Reference
=========

.. highlight:: console

Commands
--------

This is a very quick reference of Vagrant commands we find useful. For the full
documentation, check out the `Vagrant command reference`_.

.. _Vagrant command reference: https://docs.vagrantup.com/v2/cli/index.html

::

  # Start the VM
  vagrant up

  # SSH in to the VM
  vagrant ssh

  # Reprovisioning (e.g. after updating this repository)
  vagrant provision

  # Suspending (sleeping) the VM
  vagrant suspend

  # Halting (shutting down) the VM
  vagrant halt

  # Reboot (halt and up)
  vagrant reload

  # Destroying the VM (if your VM is completely broken)
  vagrant destroy

Troubleshooting
---------------

Logs
----

Chassis synchronises the Nginx and PHP log files from the Virtual Machine to your local development folder. These logs can be useful if your provisions are failing and you require further information.

There are three logs that we synchronise for you:

1. ``logs/php/php_errors.log`` - This shows any PHP errors or warnings that have occurred.
2. ``logs/nginx/error.log`` - This shows any errors that have occurred.
3. ``logs/nginx/access.log`` = This shows details of any requests that Nginx has served.

Character encoding on Windows machines
--------------------------------------

::

  $ vagrant up
  Bringing machine 'default' up with 'virtualbox' provider...
  ==> default: Importing base box 'bento/ubuntu-16.04'...
  C:/Vagrant/embedded/gems/2.1.1/gems/childprocess-0.6.3/lib/childprocess/windows/process_builder.rb:43:in `join': incompatible character encodings: Windows-1252 and UTF-8 (Encoding::CompatibilityError)


To resolve this issue you'll need to create a symlink and set the VAGRANT_HOME path. e.g.

::

  $ cd C:\users
  $ mklink /J username usérnamé
  $ setx VAGRANT_HOME "C:/users/username"

Alternatively you can set the path for VirtualBox to a directory that doesn't have special characters. To do this open the VirtualBox application, select 'File' -> 'Settings' -> 'General' and change the default path for VM's (e.g. to "C:\VirtualBox VMs").
