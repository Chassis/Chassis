# http://phusion.github.io/baseimage-docker/
FROM phusion/baseimage:0.9.22

# Install pre-pre-requisites.
RUN apt-get update
RUN apt-get install -q -y wget #ca-certificates

# Add everything we need for prerequisites.
ADD puppet /vagrant/puppet/

# Install pre-requisites.
RUN chmod u+x /vagrant/puppet/preprovision.sh
RUN /vagrant/puppet/preprovision.sh

# Add remaining files needed for actual installation
ADD config.yaml /vagrant/config.yaml
ADD wp /vagrant/wp/
ADD wp-config.php /vagrant/wp-config.php

# Install via Puppet, while running services.
RUN chmod u+x /vagrant/puppet/docker-build.sh
RUN ["/vagrant/puppet/docker-build.sh"]

# CMD /vagrant/puppet/dockerrun.sh
CMD ["/sbin/my_init"]
