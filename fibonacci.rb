def fibonacci(number)
  sum_array = [0,1]
  counter = number - 1
  if number == 0 
    0 
  end
  counter.times do 
    sum_array << sum_array[-1] + sum_array [-2]
  end
  sum_array[-1]
end  
