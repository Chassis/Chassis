#!/bin/sh

if ps aux | grep "puppet agent" | grep -v grep 2> /dev/null
then
    echo "Puppet Agent is already installed. Moving on..."
else
    wget https://raw.githubusercontent.com/petems/puppet-install-shell/master/install_puppet_7_agent.sh
    sudo sh install_puppet_7_agent.sh
    rm install_puppet_7_agent.sh
fi
