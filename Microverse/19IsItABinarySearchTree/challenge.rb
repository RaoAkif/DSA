class Node
	attr_reader :data
	attr_accessor :left, :right
	
	def initialize data
		@data = data
	end
end

def array_to_tree(array, index = 0)
	# use your function from the previous challenge
end

def search_tree?(array)
	root = array_to_tree(array)
  # write your code here
end

puts search_tree?([10, 4, 12])
# => true

puts search_tree?([10, 5, 7])
# => false
