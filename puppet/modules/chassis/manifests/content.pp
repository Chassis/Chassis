# Install WordPress themes and plugins.
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
