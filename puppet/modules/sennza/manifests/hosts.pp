class sennza::hosts(
	$aliases = []
) {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}

	package { 'watchdog':
		ensure => latest,
		provider => 'pip',
		require => Package['python-pip'],
	}

	file { [ '/etc/chassis-hosts', '/etc/chassis-hosts/conf.d' ]:
		ensure => directory
	}

	file { '/etc/chassis-hosts/conf.d/aliases':
		content => template("sennza/avahi-aliases.erb"),
	}

	file { '/vagrant/subdomain-hosts':
		ensure => file
	}

	file { '/etc/chassis-hosts/conf.d/subdomains':
		ensure => file,
		owner => "www-data",
	}
}
