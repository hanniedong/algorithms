//O(1) space complexity
/*function bubbleSort(array, compare, swap){
  slice array to make it a pure function 
  create var for array length 
  Do 
    Create var to keep track of swapped
    Loop through array up to the array length 
      If current value is greater than next value 
        create temp var as current value 
        swap the current value and next value 
        set swap variable to true 
  While swapped variable is equal to True
  return sliced array variable
}
*/

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}
