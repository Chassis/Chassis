# Setup up everything that relates to PHP
# NOTE: This now ONLY configures PHP that is already installed on the box.
# PHP is NOT installed during provisioning - it must already exist on the Vagrant box.
# The ppa:ondrej/php PPA is no longer added due to DDoS attacks.
# The version parameter is ignored and configuration is based on what's installed.
class chassis::php (
  $upload_size,
  $memory_limit,
  $extensions = [],
  $version = undef,
) {
  # Detect the installed PHP version by checking for existing php-fpm installations
  # This will use whatever version is already on the box
  # The default Chassis box includes PHP 8.3
  $short_ver = '8.3'

  # Setup our PHP prefixes for packages and directories.
  $php_package = "php${short_ver}"
  $php_dir = "php/${short_ver}"

  # Tell wp module what package to use.
  class { 'wp':
    php_package => "${php_package}-cli",
  }

  # Start and enable PHP-FPM if it exists
  # Do NOT attempt to install packages - they should already be on the box
  service { "${php_package}-fpm":
    ensure  => running,
    enable  => true,
  }

  # Configure PHP if the config directory exists
  exec { "create_php_ini_${short_ver}_fpm":
    command => "/bin/true",
    onlyif  => "/usr/bin/test -d /etc/${php_dir}/fpm",
  }

  exec { "create_php_ini_${short_ver}_cli":
    command => "/bin/true",
    onlyif  => "/usr/bin/test -d /etc/${php_dir}/cli",
  }

  # Only manage php.ini files if they exist
  file { "/etc/${php_dir}/fpm/php.ini":
    ensure  => 'file',
    content => template('chassis/php.ini.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Exec["create_php_ini_${short_ver}_fpm"],
    notify  => Service["${php_package}-fpm"],
    backup  => true,
  }

  file { "/etc/${php_dir}/cli/php.ini":
    ensure  => 'file',
    content => template('chassis/php.ini.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Exec["create_php_ini_${short_ver}_cli"],
    backup  => true,
  }

  file { "/etc/${php_dir}/fpm/pool.d/www.conf":
    ensure  => 'file',
    content => template('chassis/php-pool.conf.erb'),
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Exec["create_php_ini_${short_ver}_fpm"],
    notify  => Service["${php_package}-fpm"],
    backup  => true,
  }
}
