Introduction
============

A Story
-------

For a long time, you've had PHP running directly off your computer. You've had
some combination of MySQL and Apache running too, all of them set up and
working, but you have no idea how. Maybe they were already installed on your
computer.

Everything's plodding along until one day, your host emails you to say they're
upgrading you to PHP 5.5. You know you should test your code to make sure
nothing breaks, but you have no idea how to change it. You try to follow a guide
online by typing out the cryptic commands, but it never works for you.

Weird errors start popping up on your live site. Warnings about things that you
don't get locally. Obscure bugs caused by something out of your control.

You've heard about this thing called "Vagrant", so you try setting that up.
Problem is, you don't know the workings of Linux system administration. You try
an existing project, but give up after waiting 30 minutes for it to set up.

Enter Chassis.


Philosophy
----------

Chassis has a few important philosophies that guide it:

1. **Chassis is designed for everyone**

   Developers may be at home on the command line, but not everyone is.
   Regardless of your skill set, Chassis should be able to get you from nothing
   to a working WordPress install. More than that, if you're working on a
   project with a team, it should be able to get you set up to work on the
   project with minimal fuss.

2. **Chassis cannot be everything to everyone**

   We follow a minimalistic philosophy with Chassis. While some projects like
   VVV include `basically every tool <VVV included_>`_ you might need, we only
   include the essential tools needed to run WordPress.

   We believe that if you're selling a flashlight, you should sell it with
   batteries included, but without the rest of the hardware store. Of course,
   if you want the other tools, we've included a flexible
   :doc:`extension system </extend>` to allow grabbing the rest.

   As a side-effect, this means Chassis is **fast**. The current initial boot
   time (after a fresh clone) is **under 3 minutes**.

.. _VVV included: https://github.com/Varying-Vagrant-Vagrants/VVV#what-do-you-get

3. **Chassis should be invisible**

   Once you've set up Chassis, we want to make sure we're out of your way as
   much as possible.

   You should never need to think about how Chassis works, or how to set up
   databases, or adding host entries for DNS. We take care of all of this for
   you. The exact way that we set up and run the server shouldn't matter to you,
   unless you want to dive in and customise it.

   We also never touch your codebase. Chassis keeps your plugins/themes in a
   ``content/`` directory and allows you to add extra configuration in this
   directory. However, we **never** touch this directory, allowing you to feel
   completely safe while using Chassis.
