

def anagram_canonical_form(word)
  word.downcase.split('').sort.join('')
  # Manipulate word into canonical form ...
end

def anagrams?(word, possible_anagram)
  anagram_canonical_form(word) == anagram_canonical_form(possible_anagram)
end

def find_anagrams(word, list)
  anagram_array = []
  list.each do |element|
    if anagrams?(word, element) == true 
      anagram_array << element 
    end 
  end 
  anagram_array
end 