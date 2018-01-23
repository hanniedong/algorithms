def anagram_canonical_form(word)
  word.split('').sort.join('')
  # Manipulate word into canonical form ...
end

def anagrams?(word, possible_anagram)
  anagram_canonical_form(word) == anagram_canonical_form(possible_anagram)
end