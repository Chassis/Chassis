#!/bin/bash
# A simple setup script for my needs. Want to fix this up in the future. 

# remove wp directory
rm -rf wp

# remove content directory 
rm -rf content

# add phpMyAdmin
git clone --recursive git@github.com:Chassis/phpMyAdmin.git extensions/phpmyadmin

# add MailHog
git clone --recursive git@github.com:Chassis/MailHog.git extensions/phpmyadmin
