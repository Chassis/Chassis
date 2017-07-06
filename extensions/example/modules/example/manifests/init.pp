# Example Puppet class!
#
# Chassis automatically loads your class, and passes $config in, which is an
# array representing the YAML-based configuration. You can use this to access
# Chassis configuration, or your own custom keys. In this demo, we've used
# `show_example`. To test it out, add the following to your config:
#
#     show_example: hello!
#
# The entirety of your behaviour should be wrapped inside this class.
#
# ***********************************
#          IMPORTANT NOTES:
#
# * Your module directory must be named the same as the extension.
# * Your class must be in init.pp, and named the same as the extension.
#
# ***********************************

class example (
	$config
) {
	if $config['show_example'] {
		notify { "Here's my message: ${config['show_example']}": }
	}
}
