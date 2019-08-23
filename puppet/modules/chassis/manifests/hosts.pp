# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}

	if ( $subdomains ) {

		file { '/lib/systemd/system/chassis-hosts.service':
			ensure => 'file',
			mode   => '0644',
			source => 'puppet:///modules/chassis/chassis-hosts.service',
			notify => Exec['systemctl-daemon-reload'],
		}

		file { '/etc/avahi/aliases':
			content => template('chassis/aliases.erb'),
		}

		file { '/vagrant/local-config-hosts.php':
			source => 'puppet:///modules/chassis/local-config-hosts.php',
			mode   => '0644',
		}

		service { 'chassis-hosts':
			ensure  => running,
			enable  => true,
			require => [
				Package[ 'avahi-daemon' ],
				Package[ 'python-avahi' ],
				File[ '/lib/systemd/system/chassis-hosts.service' ],
				File[ '/etc/avahi/aliases' ],
			]
		}
	}
}
