def convert_word(word)
  if word[0] =~ /\A[aeiouAEIOU]/
    return word
  else
    first_consonant = word.scan(/\A[^aeiouAEIOU]+/).join
    rest_word = word.scan(/[aeiouAEIOU][a-z]+/).join
    converted_word = rest_word + first_consonant + "ay"
    return converted_word
  end 
end

def convert_sentence(sentence)
  word_array = []
  word_array = sentence.split(" ")
  pig_latin_array =[]
  word_array.each do |word|
    pig_latin_array << convert_word(word)
  end 
  return pig_latin_array.join(" ")
end 

