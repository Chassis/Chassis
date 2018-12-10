# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}

	if ( $subdomains ) {
		package { 'watchdog':
			ensure   => '0.8.3',
			provider => 'pip',
			require  => Package['python-pip'],
		}

		file { '/lib/systemd/system/chassis-hosts.service':
			ensure => 'file',
			mode   => '0644',
			source => 'puppet:///modules/chassis/chassis-hosts.service',
			notify => Exec['systemctl-daemon-reload'],
		}

		file { [ '/etc/chassis-hosts', '/etc/chassis-hosts/conf.d' ]:
			ensure => directory
		}

		file { '/etc/chassis-hosts/conf.d/aliases':
			content => template('chassis/avahi-aliases.erb'),
		}

		file { '/etc/chassis-hosts/conf.d/subdomains':
			ensure => file,
			mode   => '0777',
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
				Package[ 'watchdog' ],
				File[ '/lib/systemd/system/chassis-hosts.service' ],
				File[ '/etc/chassis-hosts/conf.d/aliases' ],
				File[ '/etc/chassis-hosts/conf.d/subdomains' ],
			]
		}
	}
}
