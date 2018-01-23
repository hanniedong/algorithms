def fibonacci_iterative(n)
  array = [ 0, 1 ]
  counter = n - 2 
  until counter == 0 
    array << array[-1] + array[-2]
    counter -=1 
  end 
  array[-1] 
end 

def fibonacci_recursive(n)
  return 0 if n == 1
  return 1 if n == 2 
  fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
end 

def linear_search(n, numbers)
  numbers.each do |number|
    if number == n 
      return numbers.index(number)
    end
  end 
  nil 
end 

def global (n, array)
  counter = 1
  positions_array = []
  until counter == array.length 
    if n == array[counter]
      positions_array << counter
    end 
      counter += 1
  end 
  positions_array
end 

letters = "bananas".chars
global_linear_search("s", letters)

def binary_search
  if midpoint == n 
end 
