function vowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    vowels.includes(string[i]) ? counter++ : null;
  }
  return counter;
}
