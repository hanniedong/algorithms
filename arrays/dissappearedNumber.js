function disappearedNumber(array) {
  const sortedArray = array.sort();
  const missingNumbers = [];
  for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
    sortedArray[i] !== i ? missingNumbers.push(i) : null;
  }
}
