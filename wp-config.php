<?php
// ===================================================
// Load database info and local development parameters
// ===================================================
if ( file_exists( dirname( __FILE__ ) . '/local-config-db.php' ) ) {
	define( 'WP_LOCAL_DEV', true );
	include( dirname( __FILE__ ) . '/local-config-db.php' );
}

if ( file_exists( dirname( __FILE__ ) . '/local-config.php' ) ) {
	defined('WP_LOCAL_DEV') or define( 'WP_LOCAL_DEV', true );
	include( dirname( __FILE__ ) . '/local-config.php' );
} elseif ( ! defined('WP_LOCAL_DEV') ) {
	define( 'WP_LOCAL_DEV', false );
	define( 'DB_NAME', '%%DB_NAME%%' );
	define( 'DB_USER', '%%DB_USER%%' );
	define( 'DB_PASSWORD', '%%DB_PASSWORD%%' );
	define( 'DB_HOST', '%%DB_HOST%%' ); // Probably 'localhost'
}

// =======================================
// Check that we actually have a DB config
// =======================================
if ( ! defined( 'DB_HOST' ) || strpos( DB_HOST, '%%' ) !== false ) {
	header('X-WP-Error: dbconf', true, 500);
	echo '<h1>Database configuration is incomplete.</h1>';
	echo "<p>If you're developing locally, ensure you have a local-config.php.
	If this is in production, deployment is broken.</p>";
	die(1);
}

// =======================
// Load Chassis extensions
// =======================
if ( file_exists( dirname( __FILE__ ) . '/local-config-extensions.php' ) ) {
	include( dirname( __FILE__ ) . '/local-config-extensions.php' );
}

// ==================
// Set up WP location
// ==================
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/wp/' );
}

// ======================================
// Fake HTTP Host (for CLI compatibility)
// ======================================
if ( empty( $_SERVER['HTTP_HOST'] ) ) {
	if ( defined( 'DOMAIN_CURRENT_SITE' ) ) {
		$_SERVER['HTTP_HOST'] = DOMAIN_CURRENT_SITE;
	}
	else {
		$_SERVER['HTTP_HOST'] = 'vagrant.local';
	}
}

// ========================
// Custom Content Directory
// ========================
defined('WP_CONTENT_DIR') or define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/content' );
defined('WP_CONTENT_URL') or define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content' );

// =======================
// Use built-in themes too
// =======================
if ( empty( $GLOBALS['wp_theme_directories'] ) ) {
	$GLOBALS['wp_theme_directories'] = array();
}
if ( file_exists( WP_CONTENT_DIR . '/themes' ) ) {
	$GLOBALS['wp_theme_directories'][] = WP_CONTENT_DIR . '/themes';
}
$GLOBALS['wp_theme_directories'][] = ABSPATH . 'wp-content/themes';
$GLOBALS['wp_theme_directories'][] = ABSPATH . 'wp-content/themes';

// =============================
// Configuration for the Content
// =============================
if ( file_exists( WP_CONTENT_DIR . '/config.php' ) ) {
	include( WP_CONTENT_DIR . '/config.php' );
}

// =====================
// URL hacks for Vagrant
// =====================
if ( WP_LOCAL_DEV && ! defined('WP_SITEURL') ) {
	define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp');

	if ( ! defined( 'WP_HOME' ) ) {
		define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
	}
}

// ================================================
// You almost certainly do not want to change these
// ================================================
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

// ==============================================================
// Salts, for security
// Grab these from: https://api.wordpress.org/secret-key/1.1/salt
// ==============================================================
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

// ==============================================================
// Table prefix
// Change this if you have multiple installs in the same database
// ==============================================================
if ( empty( $table_prefix ) )
	$table_prefix  = 'sz_';

// =====================================
// Errors
// Show/hide errors for local/production
// =====================================
if ( WP_LOCAL_DEV ) {
	defined( 'WP_DEBUG' ) or define( 'WP_DEBUG', true );
}
// Only override if not already set
elseif ( ! defined( 'WP_DEBUG_DISPLAY' ) ) {
	ini_set( 'display_errors', 0 );
	define( 'WP_DEBUG_DISPLAY', false );
}

// ===================
// Bootstrap WordPress
// ===================
if ( ! file_exists( ABSPATH . 'wp-settings.php' ) ) {
	header('X-WP-Error: wpmissing', true, 500);
	echo '<h1>WordPress is missing.</h1>';
	die(1);
}
require_once( ABSPATH . 'wp-settings.php' );
