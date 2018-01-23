def fibonacci_iterative(n)
  array = [ 0, 1 ]
  counter = n - 2 
  until counter == 0 
    array << array[-1] + array[-2]
    counter -=1 
  end 
  array[-1] 
end 