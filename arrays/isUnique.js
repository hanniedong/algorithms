// function isUnique(string) {
//   if (string.length > 128) {
//     return false;
//   }
//   let characterSet = {};
//   for (let i = 0; i < string.length; i++) {
//     let value = string[i];
//     if (characterSet[value]) {
//       return false;
//     } else {
//       characterSet[value] = true;
//     }
//     console.log(characterSet);
//   }
//   return true;
// }

const isUnique = number => {
  const uniqueSet = new Set();
  for (let i = 0; i < number.length; i++) {
    if (uniqueSet.has(number[i])) return false;
    uniqueSet.add(number[i]);
  }
  return true;
};

console.log(isUnique("1242"));
