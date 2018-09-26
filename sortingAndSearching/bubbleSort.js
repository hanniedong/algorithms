function bubbleSort(array) {
  const length = array.length;
  for (i = 0; i < length; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

bubbleSort([12, 1, 12, 5, 6, 78, 12, 45]);
