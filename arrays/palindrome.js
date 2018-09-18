function palindrome(string){
  let midpoint = Math.floor(string.length / 2);
  let string1 = string.split('').splice(0, midpoint).join('');
  let string2 = string.split('').splice(string.length - midpoint).reverse().join('');
  return (string1 === string2 ? true : false)
}

console.log(palindrome("ababa"));

console.log(palindrome("abba"));