function checkPermutation(stringOne, stringTwo){
  if(stringOne.length !== stringTwo.length){
    return false
  }
  return stringOne.split('').sort().join('') === stringTwo.split('').sort().join('');
}

checkPermutation('melon    ','lemon');
checkPermutation('melon','lemon');

