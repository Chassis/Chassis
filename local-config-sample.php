<?php
// Database constants
// These are probably defined in local-config-db.php
# define( 'DB_NAME', 'local_db_name' );
# define( 'DB_USER', 'local_db_user' );
# define( 'DB_PASSWORD', 'local_db_password' );
# define( 'DB_HOST', 'localhost' ); // Probably 'localhost'

// Custom table prefix
# $table_prefix  = 'sz_';

// URL to the content directory
// You'll probably want to change this.
define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content' );

// Loopback connections can suck, disable if you don't need cron
# define( 'DISABLE_WP_CRON', true );

// You'll probably want Automatic Updates disabled during development
define( 'AUTOMATIC_UPDATER_DISABLED', true );

// You'll probably want debug logging during development
define( 'WP_DEBUG_LOG', true );
