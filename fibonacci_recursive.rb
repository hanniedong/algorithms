def fibonacci_recursive(n)
  return 0 if n == 0 
  return 1 if n == 1
  fibonacci_recursive(n - 2) + fibonacci_recursive(n - 1)
end