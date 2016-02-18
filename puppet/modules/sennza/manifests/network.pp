define sennza::network (
	$location,
	$wpdir = 'wp',
	$contentdir,
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$admin_user     = 'admin',
	$admin_email    = 'admin@example.com',
	$admin_password = 'password',
) {
	$extra_hosts = join($hosts, ' ')
	$server_name = rstrip("${name} ${extra_hosts}")
	file { $wpdir:
		ensure => directory
	}
	file { "/etc/nginx/sites-available/$name":
		content => template('sennza/multisite.nginx.conf.erb'),
		notify => Service['nginx']
	}
	file { "/etc/nginx/sites-enabled/$name":
		ensure => link,
		target => "/etc/nginx/sites-available/$name",
		notify => Service['nginx']
	}

	mysql::db {$database:
		user     => $database_user,
		password => $database_password,
		host     => $database_host,
		grant    => ['all'],
	}

	wp::site {"${wpdir}":
		url            => "http://${name}/",
		name           => 'Vagrant Site',
		require        => Mysql::Db[$database],
		network        => true,
		admin_user     => $admin_user,
		admin_email    => $admin_email,
		admin_password => $admin_password,
	}
}