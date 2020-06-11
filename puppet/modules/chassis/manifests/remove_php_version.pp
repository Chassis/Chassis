# Add a type we can use to remove old php versions.
define chassis::remove_php_version {
  case $name {
    '5.6',
    '7.0',
    '7.1',
    '7.2',
    '7.3',
    '7.4': {
      package { [ "php${name}-fpm", "php${name}-cli", "php${name}-common" ]:
        ensure => absent,
        notify => Class['apt::update'],
      }
    }
    default: {
      package { [ 'php5-fpm', 'php5-cli', 'php5-common' ]:
        ensure => absent,
        notify => Class['apt::update'],
      }
    }
  }
}