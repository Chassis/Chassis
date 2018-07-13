# Install our WordPress site and add our configuration.
define chassis::content (
	$location,
	$plugins = [],
	$themes = [],
) {
  wp::plugin { $plugins:
    ensure   => 'enabled',
    location => $location,
  }

  wp::theme { $themes:
    ensure   => 'enabled',
    location => $location,
  }
}
