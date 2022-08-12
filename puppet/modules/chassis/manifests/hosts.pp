# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {

	# Jammy Jellyfish has access to the python3-avahi package but the older distros don't.
	case $::lsbdistcodename {
		'jammy': {
			package { 'python3-avahi':
				ensure  => latest,
			}
		}
	  default: {
			# Add a PPA so we can ensure we install python3-avahi.
			apt::ppa { 'ppa:yavdr/experimental-main':
				require => Class['apt']
			}
			package { 'python3-avahi':
				ensure  => latest,
				require => Apt::Ppa['ppa:yavdr/experimental-main']
			}
	  }
	}

	package { [ 'avahi-daemon', 'python3-pip', 'pkg-config', 'libdbus-glib-1-dev' ]:
		ensure  => latest
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
