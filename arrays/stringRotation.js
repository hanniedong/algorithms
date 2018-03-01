function stringRotation(stringOne, stringTwo){
  if (stringOne.length !== stringTwo.length) return false;
  let combinedString = stringOne + stringTwo;
  // console.log(combinedString)
  if (combinedString.includes(stringTwo)) return true;
  else return false;
}
stringRotation('waterbottle','erbottlewat')