# Sennza Skeleton

This is the new fangled base repository for Sennza work.

## Prerequisites

Before using Skeleton, this is how your system should be set up:

* Install [Vagrant](http://vagrantup.com/)
* Install vagrant-hostsupdater to access via `vagrant.local`:

		vagrant plugin install vagrant-hostsupdater

  **Note for Windows users:** You'll need to set
  `C:\Windows\system32\drivers\etc\hosts` to be writable by your user. Simply
  head to the properties and add your user with full control under security.

  Alternatively, add `vagrant.local` to your hosts file with `192.168.33.10` as
  the IP address.

## Using

```bash
# Clone this repo
git clone --recursive git@github.com:sennza/WordPress-Skeleton.git myproject
# If you forget --recursive:
# git submodule update --init

cd myproject

# Clone the content/ directory!
# git clone git@github.com:sennza/myproject.git content

# Use https://github.com/sennza/wp-content as a base, and follow the
# instructions there.

# Boot up a VM
vagrant up
```

Make sure you copy `local-config-sample.php` to `local-config.php`

## Adding 'real' domains

We've realized internally that using vagrant.local doesn't always cut it for development as you might be working on an OAuth/OAuth2 plugin that needs a 'real' domain to function. Thankfully we can fake it 'til we make it with a custom .yaml file.

```bash
# Clone this repo
git clone --recursive git@github.com:sennza/WordPress-Skeleton.git myproject

Copy `config.yaml` and paste it as `config.local.yaml`
# Edit config.local.yaml on line #17 and add your 'real' domain e.g.
hosts:
    - vagrant.local
    - example.sennza.com.au
```

# Boot up a VM
vagrant up

## Updating

```bash
# Pull and rebase (in case you have project-specific commits)
git pull --rebase

# Update submodules (Puppet modules and WP)
git submodule update --init


# Update your submodules if we change to a new repository

Sometimes we have to change the submodules because a repository isn't being regularly maintained. e.g. [Use Puppet Labs's apt module](https://github.com/sennza/WordPress-Skeleton/issues/5). When this happens you'll probably get confused by submodules so here are the commands you need to run to get your submodules up to date again.

```
git submodule sync
cd puppet/module/apt
git checkout master
git pull
```

# Ensure your VM is up-to-date
vagrant provision
```
