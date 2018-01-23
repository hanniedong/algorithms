def shuffle(array)
  counter = 0 
  shuffled_array = Array.new(array)
  until counter == array.length - 1
    random_counter = rand(counter)
    shuffled_array[counter], shuffled_array[random_counter] = shuffled_array[random_counter], shuffled_array[counter]
    counter += 1
  end 
  shuffled_array
end 

shuffle([1,2,3,4])