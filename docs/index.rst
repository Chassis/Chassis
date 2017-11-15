.. Chassis documentation master file, created by
   sphinx-quickstart on Sun Dec 14 02:43:07 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Chassis
==================

Chassis is an open source virtual server for your WordPress site, built using `Vagrant`_.
(:doc:`quickstart`)

Many people are still using their main computer for local development. However,
this can be a huge pain when bringing new developers up to speed on a project,
or trying to get non-developers (designers, managers, clients) running a site.

The concept of virtual machines for servers has become popular recently, but too
many of these projects are focussed around specific uses, and include many
things not everyone needs. They can end up massively increasing development time
by introducing long waiting times, or huge context switches.

Chassis takes care of setting up a local server in an optimal configuration for
WordPress, and removes all the hard work. It's fast (remember the Famous Five
Minute Install?), and flexible to allow you to build how you want to.

Getting started is as easy as downloading Chassis and running a single command.
(We're working on making it possible to run Chassis without ever touching the
command line, but we're not quite there.)

You can contribute to `Chassis on Github`_.

.. _Vagrant: http://vagrantup.com/
.. _Chassis on Github: https://github.com/Chassis/Chassis

User Guide
----------

.. toctree::
   :maxdepth: 2

   intro
   quickstart
   config
   guides
   contents
   extend
   reference
