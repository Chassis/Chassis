<?php
// Note: Database constants are set in the automatically-generated
// local-config-db.php. Change these via your config.local.yaml instead.

// Loopback connections can suck, disable if you don't need cron
# define( 'DISABLE_WP_CRON', true );

// You'll probably want Automatic Updates disabled during development
define( 'AUTOMATIC_UPDATER_DISABLED', true );

// You'll probably want debug logging during development
define( 'WP_DEBUG_LOG', true );

// Show all php errors for WP_CLI
if ( defined( 'WP_CLI' ) && WP_CLI ) {
	ini_set( 'display_errors', 1 );
}
