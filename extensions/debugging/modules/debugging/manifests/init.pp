class debugging (
  $path = "/vagrant/extensions/debugging"
) {
  if ! ( File['/vagrant/content'] ) {
    file { "/vagrant/content":
      ensure => "directory",
    }
  }
  if ! ( File['/vagrant/content/plugins'] ) {
    file { "/vagrant/content/plugins":
      ensure => "directory",
    }
  }
  wp::plugin { 'debug-bar':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
  wp::plugin { 'debug-bar-extender':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
  wp::plugin { 'debug-bar-cron':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
  wp::plugin { 'debug-bar-transients':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
  wp::plugin { 'log-deprecated-notices':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
  wp::plugin { 'rewrite-rules-inspector':
    ensure   => enabled,
    location => '/vagrant/wp',
    require  => Class['wp'],
  }
}
