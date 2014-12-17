class sennza::php (
	$extensions = [],
	$version = "5.4",
) {
	apt::ppa { "ppa:ondrej/php5-oldstable": }
	apt::ppa { "ppa:ondrej/php5": }
	apt::ppa { "ppa:ondrej/php5-5.6": }

	if $version =~ /^(\d+)\.(\d+)$/ {
		$package_version = "${version}.*"
	}
	else {
		$package_version = "${version}*"
	}

	if versioncmp( "${version}", '5.5') < 0 {
		file { "/etc/init/php5-fpm.conf":
			ensure => absent
		}

		####
		# ANNOUNCING:
		# The hackiest hack you've ever seen!
		#
		# Changing from PHP 5.5+ down to a lower version breaks the way that
		# init scripts work with upstart. Instead, we hold apt-get/PHP's hand
		# and guide it through the process.
		####
		exec { "rm init.d/php5-fpm":
			command => "/bin/rm /etc/init.d/php5-fpm",
			onlyif => "/bin/grep -q 'converted to Upstart' /etc/init.d/php5-fpm",
			before => [
				Package[ 'php5-fpm' ],
				Service[ 'php5-fpm' ],
			]
		}
		file { "/etc/init.d/php5-fpm":
			# Set up the 5.3 init script, but only if one doesn't exist already
			replace => "no",
			source => "puppet:///modules/sennza/php-5.3.init",
			require => Exec[ "rm init.d/php5-fpm" ],
			before => [
				Package[ 'php5-fpm' ],
				Service[ 'php5-fpm' ],
			]
		}
	}

	$packages = [ 'php5-fpm', 'php5-cli', 'php5-common' ]
	$prefixed_extensions = prefix($extensions, 'php5-')

	# Hold the packages at the necessary version
	apt::hold { $packages:
		version => $package_version
	}
	apt::hold { $prefixed_extensions:
		version => $package_version
	}

	# Grab the packages at the given versions
	package { $packages:
		# Hold at the given version
		ensure => 'latest',
		install_options => "--force-yes",

		notify => Service['php5-fpm'],
		require => [
			Apt::Hold[ $packages ],
			Apt::Ppa[ "ppa:ondrej/php5-oldstable" ],
			Apt::Ppa[ "ppa:ondrej/php5" ],
			Apt::Ppa[ "ppa:ondrej/php5-5.6" ]
		],
	}

	# Ensure we always do common before fpm/cli
	Package['php5-common'] -> Package['php5-fpm']
	Package['php5-common'] -> Package['php5-cli']

	service { 'php5-fpm':
		ensure => running,
		require => Package[ 'php5-fpm' ]
	}

	# Install the extensions we need
	package { $prefixed_extensions:
		# Hold at the given version
		ensure => 'latest',
		install_options => "--force-yes",

		require => [
			Package[ $packages ],
			Apt::Hold[ $prefixed_extensions ],
		]
	}

	# Set up the configuration files
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