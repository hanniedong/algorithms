def linear (n, array)
  counter = 1
  until counter == array.length 
    if n == array[counter]
      return counter
    end 
      counter += 1
  end 
end 

numbers = [0, 8, 5, 9, 7, 2]
linear(7, numbers)

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