#!/bin/bash

PID=$$
(
	puppet apply \
		--modulepath "/vagrant/puppet/modules" \
		--hiera_config /dev/null \
		--disable_warnings=deprecations \
		/vagrant/puppet/manifests/docker.pp || sleep 2; \
 	kill $PID
) &

exec /sbin/my_init
