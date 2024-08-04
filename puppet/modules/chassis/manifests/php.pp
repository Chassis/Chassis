# Setup up everything that relates to PHP
class chassis::php (
  $upload_size,
  $extensions = [],
  $version = '8.1',
) {
  # Ensure add-apt-repository is actually available.
  if !defined(Package[$apt::ppa_package]) {
    package { $apt::ppa_package:
      ensure => latest,
    }
  }

  apt::ppa { 'ppa:ondrej/php':
    require => [
      Package[$apt::ppa_package],
      Class['apt'],
    ],
  }

  apt::ppa { 'ppa:ondrej/php-qa':
    require => [
      Package[$apt::ppa_package],
      Class['apt'],
    ],
  }

  if $version =~ /^(\d+)\.(\d+)$/ {
    $package_version = "${version}.*"
    $short_ver = $version
  }
  else {
    $package_version = "${version}*"
    $short_ver = regsubst($version, '^(\d+\.\d+)\.\d+$', '\1')
  }

  # Setup our PHP prefixes for packages and directories.
  $php_package = "php${short_ver}"
  $php_dir = "php/${short_ver}"

  # Prepare our array of PHP common packages
  $common_packages = [
    "${php_package}-fpm",
    "${php_package}-common",
    "${php_package}-xml",
    "${php_package}-mbstring",
    "${php_package}-zip",
    "${php_package}-opcache",
    "${php_package}-readline",
  ]

  # Merge in php-json if the version is less than 8.0.
  # 8.0 and upwards comes bundled with php-json
  if ( $short_ver in ['7.4', '7.3', '7.2', '7.1', '7.0', '5.6']) {
    $packages = concat( $common_packages, ["${php_package}-json"])
  }

  # Some of the Chassis extensions define php-cli so let's check for that to prevent failures.
  if ! defined( Package["${php_package}-cli"]) {
    # Because we can't reassign variables in Puppet we have to do some more logic to come up with the core php packages.
    if defined('$packages') {
      $core_packages = concat($packages, ["${php_package}-cli"])
    } else {
      $core_packages = concat($common_packages, ["${php_package}-cli"])
    }
  } else {
    $core_packages = $packages
  }

  $prefixed_extensions = prefix( $extensions, "${php_package}-" )

  # Any array of all the versions of php that we support.
  $php_versions = ['8.4', '8.3', '8.2', '8.1', '8.0', '7.4', '7.3', '7.2', '7.1', '7.0', '5.6']

  # Work out which version of php we should remove if we've swapped versions.
  $php_versions_to_remove = delete( $php_versions, $short_ver )

  # Hold the packages at the necessary version.
  apt::pin { $core_packages:
    packages => $core_packages,
    version  => $package_version,
    priority => 1001,
  }
  apt::pin { $prefixed_extensions:
    packages => $prefixed_extensions,
    version  => $package_version,
    priority => 1001,
  }

  # Grab the packages at the given versions
  package { $core_packages:
    # Hold at the given version
    ensure          => 'latest',
    install_options => '--force-yes',
    notify          => Service["${php_package}-fpm"],
    require         => [
      Apt::Pin[$core_packages],
      Apt::Ppa['ppa:ondrej/php'],
      Apt::Ppa['ppa:ondrej/php-qa'],
      Class['apt::update'],
      Chassis::Remove_php_version[$php_versions_to_remove]
    ],
  }

  # Tell wp module what package to use.
  class { 'wp':
    php_package => "${php_package}-cli",
  }

  chassis::remove_php_version { $php_versions_to_remove:
    notify => Service["${php_package}-fpm"],
  }

  # Ensure we always do common before fpm/cli
  Package["${php_package}-common"] -> Package["${php_package}-fpm"]
  Package["${php_package}-common"] -> Package["${php_package}-cli"]

  service { "${php_package}-fpm":
    ensure  => running,
    require => Package["${php_package}-fpm"],
  }

  # Install the extensions we need
  package { $prefixed_extensions:
    # Hold at the given version
    ensure          => 'latest',
    install_options => '--force-yes',

    require         => [
      Package[$core_packages],
      Apt::Pin[$prefixed_extensions]
    ],
  }

  file { "/etc/${php_dir}/fpm/php.ini":
    ensure  => 'file',
    content => template('chassis/php.ini.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Package["${php_package}-fpm"],
    notify  => Service["${php_package}-fpm"],
  }

  file { "/etc/${php_dir}/cli/php.ini":
    ensure  => 'file',
    content => template('chassis/php.ini.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Package["${php_package}-cli"],
  }

  file { "/etc/${php_dir}/fpm/pool.d/www.conf":
    ensure  => 'file',
    content => template('chassis/php-pool.conf.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => [
      Package["${php_package}-fpm"],
      Package["${php_package}-cli"],
    ],
    notify  => Service["${php_package}-fpm"],
  }
}
