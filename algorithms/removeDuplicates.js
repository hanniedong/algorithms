//input: array
//use a Set
const removeDuplicates = array => {
  const numberSet = new Set();
  array.forEach(number => numberSet.add(number));
  return numberSet;
};
console.log(removeDuplicates([1, 1, 1, 2]));
