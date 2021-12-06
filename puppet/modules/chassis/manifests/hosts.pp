# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {
	package { [ 'avahi-daemon', 'python3-pip', 'python-avahi', 'pkg-config', 'libdbus-glib-1-dev' ]:
		ensure => latest,
	}

	ensure_packages( ['mdns-publisher'], {
		ensure   => present,
		provider => 'pip3',
		require  => [ Package['python3-pip'], Package['libdbus-glib-1-dev'] ],
	})

	file { '/lib/systemd/system/chassis-hosts.service':
		ensure  => 'file',
		mode    => '0644',
		content => template('chassis/chassis-hosts.service.erb'),
		notify  => Service['chassis-hosts'],
		require => Package['mdns-publisher'],
	}

	if ( $subdomains ) {
		file { '/vagrant/local-config-hosts.php':
			source => 'puppet:///modules/chassis/local-config-hosts.php',
			mode   => '0644',
		}
	} else {
		file { '/vagrant/local-config-hosts.php':
			ensure => absent,
		}
	}

	service { 'chassis-hosts':
		ensure  => running,
		enable  => true,
		require => [
			Package[ 'avahi-daemon' ],
			Package[ 'python-avahi' ],
			File[ '/lib/systemd/system/chassis-hosts.service' ],
		],
		notify  => Exec['systemctl-daemon-reload'],
	}
}
