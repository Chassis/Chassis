Reference
=========

.. highlight:: bash

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
