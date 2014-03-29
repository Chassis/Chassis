class sennza::php (
	$extensions = [],
	$version = "5.4",
) {
	apt::ppa { "ppa:ondrej/php5-oldstable": }
	apt::ppa { "ppa:ondrej/php5": }

	if $version =~ /^(\d+)\.(\d+)$/ {
		$package_version = "${version}.*"
	}
	else {
		$package_version = $version
	}

	if versioncmp( "${version}", '5.5') < 0 {
		file { "/etc/init/php5-fpm.conf":
			ensure => absent
		}
	}

	package { [ 'php5-fpm', 'php5-cli', 'php5-common' ]:
		ensure => $package_version,
		notify => Service['php5-fpm']
	}

	# Ensure we always do common before fpm/cli
	Package['php5-common'] -> Package['php5-fpm']
	Package['php5-common'] -> Package['php5-cli']

	service { 'php5-fpm':
		ensure => running,
		require => Package[ 'php5-fpm' ]
	}

	$prefixed_extensions = prefix($extensions, 'php5-')
	package { $prefixed_extensions:
		ensure => $package_version,
		require => Package[ 'php5-fpm' ]
	}

	if 'xdebug' in $extensions {
		file { '/etc/php5/fpm/conf.d/xdebug.ini':
			content => template('sennza/xdebug.ini.erb'),
			owner   => 'root',
			group   => 'root',
			mode    => 0644,
			require => Package['php5-fpm','php5-xdebug'],
			ensure  => 'present',
			notify  => Service['php5-fpm'],
		}

#		package { 'php5-fpm':
#			ensure     => running,
#			enable     => true,
#			hasrestart => true,
#			hasstatus  => true,
#			require    => Package['php5-fpm'],
#			subscribe  => File['/etc/php5/fpm/conf.d/xdebug.ini'],
#		}
	}

	file { '/etc/php5/fpm/php.ini':
		content => template('sennza/php.ini.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package['php5-fpm'],
		ensure  => 'present',
		notify  => Service['php5-fpm'],
	}

	file { '/etc/php5/fpm/pool.d/www.conf':
		content => template('sennza/php-pool.conf.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package['php5-fpm'],
		ensure  => 'present',
		notify  => Service['php5-fpm'],
	}
}