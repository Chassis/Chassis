class chassis::hosts(
	$aliases = [],
	$subdomains = false,
) {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}

	if ( $subdomains ) {
		package { 'watchdog':
			ensure => '0.8.3',
			provider => 'pip',
			require => Package['python-pip'],
		}

		file { '/etc/init/chassis-hosts.conf':
			source => "puppet:///modules/chassis/hosts.init",
			mode => "0644",
		}

		file { [ '/etc/chassis-hosts', '/etc/chassis-hosts/conf.d' ]:
			ensure => directory
		}

		file { '/etc/chassis-hosts/conf.d/aliases':
			content => template("chassis/avahi-aliases.erb"),
		}

		file { '/vagrant/subdomain-hosts':
			ensure => file
		}

		file { '/etc/chassis-hosts/conf.d/subdomains':
			ensure => file,
			owner => "www-data",
		}

		service { "chassis-hosts":
			ensure => running,
			require => [
				Package[ 'avahi-daemon' ],
				Package[ 'python-avahi' ],
				Package[ 'watchdog' ],
				File[ '/etc/init/chassis-hosts.conf' ],
				File[ '/etc/chassis-hosts/conf.d/aliases' ],
				File[ '/etc/chassis-hosts/conf.d/subdomains' ],
			]
		}
	}
}
