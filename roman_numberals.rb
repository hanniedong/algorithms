def convert_to_roman(number, *modern)
  roman_numeral_string = ''
  
  roman_numerals = {
    1000 => "M",
    500 => "D",
    100 => "C",
    50 => "L",
    10 => "X",
    5 => "V",
    1 => "I"
  }

  modern_roman_numerals = {
    1000 => "M",
    500 => "D",
    100 => "C",
    50 => "L",
    10 => "X",
    5 => "V",
    4 => "IV",
    1 => "I"
  }
  
  if modern == [true]
    numerals_hash = modern_roman_numerals
  else
    numerals_hash = roman_numerals
  end
  
  numerals_hash.each do |value, character|
    if number >= value && number > 0 
      if number / value > 1 
        number_of_characters = (number / value).floor
      else
        number_of_characters = 1
      end 
    roman_numeral_string << character * number_of_characters
    number -= value * number_of_characters
    end 
  end
roman_numeral_string
end 

convert_to_roman(4, true)