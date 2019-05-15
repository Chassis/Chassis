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

There is a known bug in Vagrant 1.8.5 which will result in the following output:

::

  Vagrant attempted to execute the capability 'change_host_name'
  on the detect guest OS 'linux', but the guest doesn't
  support that capability. This capability is required for your
  configuration of Vagrant. Please either reconfigure Vagrant to
  avoid this capability or fix the issue by creating the capability.
  To correct this you can either follow this fix on `stackoverflow`_ or rollback to Vagrant 1.8.4 until 1.8.6 is released.

.. _stackoverflow: http://stackoverflow.com/questions/38636023/vagrant-not-supported-the-capability-change-host-name

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
