def factorial_recursive (number)
  return 1 if number == 0 
  return 1 if number == 1
  number * factorial_recursive(number-1)
end 

factorial_recursive(5)