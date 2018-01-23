def factorial_recursive(number)
  if number == 0, return 1 
  if number == 1, return 1 
  factorial_recursive(number) * factorial_recursive(n-1)
end 