def prime_factors(number)
  prime_factors = []
  counter = 2 
  until number == 1 
    if number % 2 == 0 
      prime_factors << 2 
      number /= 2 
    end
    if number % counter == 0 
      prime_factors << counter 
      number /= counter 
    end 
    counter += 1 
  end 
  prime_factors
end 