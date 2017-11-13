# http://phusion.github.io/baseimage-docker/
FROM phusion/baseimage:0.9.22

# Install pre-pre-requisites.
RUN apt-get update
RUN apt-get install -q -y wget #ca-certificates

# Add everything we need for prerequisites.
ADD puppet/preprovision.sh /vagrant/puppet/preprovision.sh

# Install pre-requisites.
RUN chmod u+x /vagrant/puppet/preprovision.sh
RUN /vagrant/puppet/preprovision.sh

# Add remaining files needed for actual installation
ADD config.yaml /vagrant/config.yaml
ADD puppet/chassis.rb /vagrant/puppet/chassis.rb
ADD puppet/modules /vagrant/puppet/modules
ADD wp-config.php /vagrant/wp-config.php
ADD puppet/manifests/docker.pp /vagrant/puppet/manifests/docker.pp
ADD puppet/docker-build.sh /vagrant/puppet/docker-build.sh
ADD wp /vagrant/wp/

# Install via Puppet, while running services.
RUN ln -s /vagrant /chassis
RUN chmod u+x /vagrant/puppet/docker-build.sh
RUN ["/vagrant/puppet/docker-build.sh"]
RUN rm /chassis

# Clean up.
RUN apt-get remove -q -y --allow-remove-essential --purge init puppet python3-software-properties systemd systemd-sysv \
	&& apt-get autoremove -q -y \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
	&& rm -rf /vagrant/wp /vagrant/puppet

CMD ["/sbin/my_init"]
