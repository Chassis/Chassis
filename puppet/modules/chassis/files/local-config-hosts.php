<?php
/**
 * Name: Chassis Multisite Hosts
 * Description: Automatically set up DNS for multisite hosts.
 */

namespace Chassis\Hosts;

$GLOBALS['wp_filter']['muplugins_loaded'][10]['chassis-hosts'] = array(
	'function' => __NAMESPACE__ . '\\bootstrap',
	'accepted_args' => 1,
);

function bootstrap() {
	add_filter( 'wpmu_new_blog', __NAMESPACE__ . '\\add_host' );
	add_filter( 'delete_blog', __NAMESPACE__ . '\\remove_host' );
}

function add_host() {
	write_hosts();
}

function remove_host( $blog_id ) {
	write_hosts( array( $blog_id ) );
}

function write_hosts( $exclude = array() ) {
	$sites = get_sites( array(
		'deleted' => 0,
	) );
	$domains = array();

	foreach ( $sites as $site ) {
		if ( in_array( $site->id, $exclude ) ) {
			continue;
		}

		$domains[] = $site->domain;
	}

	$domains = array_unique( $domains );
	$content = implode( "\n", $domains );

	file_put_contents( '/etc/avahi/aliases', $content );
}
