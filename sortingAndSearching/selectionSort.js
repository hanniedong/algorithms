function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) indexOfMin = j;
    }
    [array[i], array[indexOfMin]] = [array[indexOfMin], array[i]];
  }
  return array;
}
