# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {

	# Jammy Jellyfish configurations.
	case $facts['os']['distro']['codename'] {
		'jammy': {
			# Jammy Jellyfish has access to the python3-avahi package so install it.
			package { 'python3-avahi':
				ensure  => latest,
			}
			# Enable ssh-rsa on Jammy Jellyfish
			file { "/etc/ssh/sshd_config.d/ssh-rsa.conf":
				content => template('chassis/ssh-rsa.conf.erb'),
				notify  => Exec['restart-ssh']
			}
			# Restart ssh.
			exec {'restart-ssh':
				path        => '/bin',
				command     => 'systemctl restart ssh',
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

	stdlib::ensure_packages( ['mdns-publisher'], {
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
