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
	add_filter( 'network_admin_notices', __NAMESPACE__ . '\\add_provision_notice' );
}

/**
 * Trigger a notice about needing to run a provision for the subdomain.
 */
function add_provision_notice() {
	if ( isset( $_GET['update'] ) && ( 'added' == $_GET['update'] ) ) : ?>
		<div class="notice notice-warning is-dismissible">
			<p><?php _e( 'You may need to add this site to your yaml file and run <code>vagrant provision</code> for this site to resolve.', 'chassis' ); ?></p>
		</div>
	<?php endif;
}

