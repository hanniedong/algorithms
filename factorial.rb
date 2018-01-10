def factorial (number)
  counter = number
  total = 1 
  until counter == 1 
    total *= counter 
    counter -=1
  end 
  total
end 