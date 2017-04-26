# Example Extension

Hello! Chassis has a system of extensions, which work similarly to WordPress plugins. Right now, you're looking at an example extension included in every Chassis install.

This extension has **no effect** by default.


## Creating an Extension

If you want to create your own extension, copy this directory and rename it to whatever you'd like your new extension to be called. You'll also need to rename the `modules/example` directory, and rename the class inside `modules/example/manifests/init.pp`

Extensions can run custom Puppet code to provision the system. This allows you to install anything on the machine, or make any alterations to the system that you'd like. The entrypoint for your Puppet code is a class named the same as the extension (`example` for this plugin). This class receives the YAML configuration as a parameter, and is run in the same context as Chassis' built-in provisioning, allowing you to do basically anything you'd like.


## Version 2

Version 2 was introduced in December 2016 as part of changes required for compatibility with newer versions of Puppet. This version removes the `chassis.pp` file that was previously loaded, and requires a Puppet class instead.

To use version 2, you need a `chassis.yaml` file in your extension's top-level directory. This should contain `version: 2`, and may contain additional configuration in the future. This will cause Chassis to load your `init.pp`, and provisioning will fail if you do not have this file/class.

(Note that the `chassis.yaml` file is for configuring the extension API with Chassis, and is **not** user-configurable. Your extension should use keys in the regular `config.yaml` instead.)
