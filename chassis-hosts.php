<?php
/**
 * Name: Chassis Multisite Hosts
 * Description: Automatically set up DNS for multisite hosts.
 *
 * To set up: symlink this from your content/mu-plugins/ directory!
 */

namespace Chassis\Hosts;

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

add_filter( 'wpmu_new_blog', __NAMESPACE__ . '\\add_host' );
add_filter( 'delete_blog', __NAMESPACE__ . '\\remove_host' );

function add_host() {
	write_hosts();
}

function remove_host( $blog_id ) {
	write_hosts( array( $blog_id ) );
}

function write_hosts( $exclude = array() ) {
	$sites = wp_get_sites( array(
		'deleted' => 0,
		'limit' => 0,
	) );
	$domains = array();

	foreach ( $sites as $site ) {
		if ( in_array( $site['blog_id'], $exclude ) ) {
			continue;
		}

		$domains[] = $site['domain'];
	}

	$domains = array_unique( $domains );
	$content = implode( "\n", $domains );

	file_put_contents( '/etc/chassis-hosts/conf.d/subdomains', $content );
}
