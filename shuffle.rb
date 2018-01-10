def shuffle(array)
  counter = 0 
  until counter == array.length - 1
    random_counter = rand(counter)
    array[counter], array[random_counter] = array[random_counter], array[counter]
    counter += 1
  end 
  array
end 