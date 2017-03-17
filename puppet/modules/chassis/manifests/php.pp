class chassis::php (
	$extensions = [],
	$version = "5.6",
) {
	apt::ppa { "ppa:ondrej/php5-oldstable": }
	apt::ppa { "ppa:ondrej/php": }

	if $version =~ /^(\d+)\.(\d+)$/ {
		$package_version = "${version}.*"
		$short_ver = $version
	}
	else {
		$package_version = "${version}*"
		$short_ver = regsubst($version, '^(\d+\.\d+)\.\d+$', '\1')
	}

	if versioncmp( "${version}", '5.4') <= 0 {
		$php_package = 'php5'
		$php_dir = 'php5'
	}
	else {
		$php_package = "php${short_ver}"
		$php_dir = "php/${short_ver}"
	}

	if versioncmp( "${version}", '5.5') < 0 {
		file { "/etc/init/${php_package}-fpm.conf":
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
		exec { "rm init.d/${php_package}-fpm":
			command => "/bin/rm /etc/init.d/${php_package}-fpm",
			onlyif => "/bin/grep -q 'converted to Upstart' /etc/init.d/${php_package}-fpm",
			before => [
				Package["${php_package}-fpm"],
				Service["${php_package}-fpm"]
			]
		}
		file { "/etc/init.d/${php_package}-fpm":
			# Set up the 5.3 init script, but only if one doesn't exist already
			replace => "no",
			source => "puppet:///modules/chassis/php-5.3.init",
			require => Exec["rm init.d/${php_package}-fpm"],
			before => [
				Package["${php_package}-fpm"],
				Service["${php_package}-fpm"],
			]
		}
	}

	# Add mbstring to all versions of php
	if versioncmp( "${version}", '5.5') < 0 {
		$packages = [ "${php_package}-fpm", "${php_package}-cli", "${php_package}-common", 'php-xml', 'php-mbstring' ]
	} else {
		$packages = [ "${php_package}-fpm", "${php_package}-cli", "${php_package}-common", "${php_package}-xml", "${php_package}-mbstring", "${php_package}-zip" ]
	}
	$prefixed_extensions = prefix($extensions, "${php_package}-")

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

		notify => Service["${php_package}-fpm"],
		require => [
			Apt::Hold[$packages],
			Apt::Ppa["ppa:ondrej/php5-oldstable"],
			Apt::Ppa["ppa:ondrej/php"],
		],
	}

	# Tell wp module what package to use.
	class { 'wp':
		php_package => "${php_package}-cli",
	}

	# Ensure we always do common before fpm/cli
	Package["${php_package}-common"] -> Package["${php_package}-fpm"]
	Package["${php_package}-common"] -> Package["${php_package}-cli"]

	service { "${php_package}-fpm":
		ensure => running,
		require => Package["${php_package}-fpm"]
	}

	define remove_php_fpm {
		case $name {
			"5.5",
			"5.6",
			"7.0",
			"7.1": {
				package { [ "php${name}-fpm", "php${name}-cli", "php${name}-common" ]:
					ensure => absent,
				}
			}
			# "5.3",
			# "5.4",
			default: {
				package { [ "php5-fpm", "php5-cli", "php5-common" ]:
					ensure => absent,
				}
			}
		}
	}

	case $short_ver {
		"5.3": {
			remove_php_fpm { [ "5.5", "5.6", "7.0", "7.1" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		"5.4": {
			remove_php_fpm { [ "5.5", "5.6", "7.0", "7.1" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		"5.5": {
			remove_php_fpm { [ "old", "5.6", "7.0", "7.1" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		"5.6": {
			remove_php_fpm { [ "old", "5.5", "7.0", "7.1" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		"7.0": {
			remove_php_fpm { [ "old", "5.5", "5.6", "7.1" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		"7.1": {
			remove_php_fpm { [ "old", "5.5", "5.6", "7.0" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
		default: {
			remove_php_fpm { [ "old", "5.5", "5.6" ]:
				notify => Service["${php_package}-fpm"],
			}
		}
	}

	# Install the extensions we need
	package { $prefixed_extensions:
		# Hold at the given version
		ensure => 'latest',
		install_options => "--force-yes",

		require => [
			Package[ $packages ],
			Apt::Hold[ $prefixed_extensions ]
		]
	}

	file { "/etc/${php_dir}/fpm/php.ini":
		content => template('chassis/php.ini.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package["${php_package}-fpm"],
		ensure  => 'present',
		notify  => Service["${php_package}-fpm"]
	}

	file { "/etc/${php_dir}/fpm/pool.d/www.conf":
		content => template('chassis/php-pool.conf.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package["${php_package}-fpm"],
		ensure  => 'present',
		notify  => Service["${php_package}-fpm"]
	}
}
