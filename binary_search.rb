def binary_search (n, array, start_point = 0, end_point = array.length - 1)
  midpoint  = (start_point + end_point) / 2
  return nil if midpoint == 0 || midpoint == end_point
  if n < midpoint 
    start_point = midpoint + 1
  elsif n > midpoint
    end_point = midpoint
  else 
    return midpoint 
  end 
  binary_search(n, array, start_point, end_point)
end 

binary_search("b", array2, start_point, end_point)
array2 = ("a".. "z").to_a