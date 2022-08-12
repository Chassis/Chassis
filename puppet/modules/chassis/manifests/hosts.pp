# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {

	# Add a PPA so we can ensure we install python3-avahi.
	apt::ppa { 'ppa:yavdr/experimental-main':
		require => Class['apt']
	}

	package { [ 'avahi-daemon', 'python3-pip', 'python3-avahi', 'pkg-config', 'libdbus-glib-1-dev' ]:
		ensure  => latest,
		require => Apt::Ppa['ppa:yavdr/experimental-main'],
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
			Package[ 'python3-avahi' ],
			File[ '/lib/systemd/system/chassis-hosts.service' ],
			Exec['restart-avahi']
		],
	}


}
