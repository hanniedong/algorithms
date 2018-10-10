function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = this.nums[i];
    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = value;
  }
  return array;
}
