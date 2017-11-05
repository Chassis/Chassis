# FROM ubuntu-upstart:precise
# http://phusion.github.io/baseimage-docker/
FROM phusion/baseimage:0.9.22

# Install pre-pre-requisites.
RUN apt-get update
RUN apt-get install -q -y wget #ca-certificates

# puppetlabs-mysql requires a hack for upstart detection.
# https://ask.puppet.com/question/10955/issues-with-ubuntu-docker-image-and-puppetlabs-mysql/
# RUN mv /sbin/initctl /sbin/oldinitctl
# RUN echo -e '#!/bin/bash\nif [ $1 == "--version" ]\nthen\n  echo "initctl (upstart 1.12.1)"\nfi\n/sbin/oldinitctl "$@"' > /sbin/initctl
# RUN chmod 755 /sbin/initctl

# TEMPORARY!
# ADD key.pub /tmp/key.pub
# RUN cat /tmp/key.pub >> /root/.ssh/authorized_keys && rm -f /tmp/key.pub

# Add everything in our context. We only use the static provisioning here to
# improve speed.
ADD config.yaml /vagrant/config.yaml
ADD puppet /vagrant/puppet/
ADD wp /vagrant/wp/

# Install pre-requisites.
RUN chmod u+x /vagrant/puppet/preprovision.sh
RUN /vagrant/puppet/preprovision.sh

# Install via Puppet, while running services.
RUN chmod u+x /vagrant/puppet/docker-build.sh
RUN ["/vagrant/puppet/docker-build.sh"]

# CMD /vagrant/puppet/dockerrun.sh
# CMD ["/sbin/my_init"]
