
def convert_to_roman(number)
  roman_numerals = {
    1000 => "M",
    500 => "D",
    100 => "C",
    50 => "L",
    10 => "X",
    5 => "V",
    1 => "I"
  }

  roman_numeral_string = ''
  roman_numerals.each do |key, value|
    until number < key 
      roman_numeral_string << value 
      number -= key 
    end 
  end 
  roman_numeral_string
end 

convert_to_roman(14)
