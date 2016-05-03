# Debugging
A [Chassis](https://github.com/Chassis/Chassis) extension to install and activate common WordPress plugins used for debugging during development.

## What's this plugin do

This Chassis extension installs and activates the following plugins:

1. [Debug Bar](https://wordpress.org/plugins/debug-bar/)
2. [Debug Bar Extender](https://wordpress.org/plugins/debug-bar-extender/)
3. [Debug Bar Cron](https://wordpress.org/plugins/debug-bar-cron/)
4. [Debug Bar Transients](https://wordpress.org/plugins/debug-bar-transients/)
5. [Log Deprecated Notices](https://wordpress.org/plugins/log-deprecated-notices/)
6. [Rewrite Rules Inspector](https://wordpress.org/plugins/rewrite-rulesinspector/)

## Usage
1. Clone Chassis `git clone --recursive https://github.com/Chassis/Chassis debugging`
2. Add this extension to your extensions directory `cd themereview && git clone git@github.com:Chassis/debugging.git extensions/debugging`
3. Run `vagrant up`
4. Browse to [http://vagrant.local](http://vagrant.local/)
