//function insertionSort
//loop through array
//create temp variable for current element
//create var and set equal to previous element's index
//loop backwards while index >=0 and current element > temp variable
//set next element equal to current element
//set next element equal to temp
//O(1) space

const insertionSort = array => {
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    for (let j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};
