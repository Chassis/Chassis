module Puppet::Parser::Functions
	newfunction(:sz_extensions, :type => :rvalue) do |args|
		directory = args[0]
		Dir.glob(directory + '/*').map { |directory| File.basename( directory ) }
	end
end