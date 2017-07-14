# Chassis

Chassis is a virtual server for your WordPress site, built using [Vagrant](https://www.vagrantup.com/).

Chassis is basically a way to run WordPress (and related parts, such as PHP and
nginx) without needing to worry about setting up anything. You can imagine it as
MAMP/WAMP on steroids.

[Vagrant]: http://vagrantup.com/

## Installing & Documentation

Follow our [quickstart instructions](http://docs.chassis.io/en/latest/quickstart/)
to get up and running right away!

We've got tonnes more documentation available at http://chassis.io/ to peruse
through at your leisure.

## FAQ

### How is Chassis different from [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV)?

Each Chassis install is self-contained. We do this to try and mirror the server
that you will be deploying to.

Note that while you can't have multiple independent installs on the same Chassis
box, we support both subdomain and subdirectory multisite out of the box.

### Can you add X?

While we certainly can add any feature, consider first if it's better off as a
Chassis extension. We try and keep Chassis as lightweight as possible, and
extensions are a good way of adding features without weighing down
Chassis itself.
