#iterative - ruby 

def countdown_script(number)
  script = ""

  while number > 0 
    script << "{number} ... \n"
    numer -= 1 
  end 

  script << "Blast Off!"
end 

#recursive - ruby 

def countdown_script_recursive (number)
  return "Blast off!" if number < 1 
  "#{number}.. \n" + countdown_script_recursive(number - 1)
end 