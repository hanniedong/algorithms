function quickSort(array) {
  if (array.length === 0) return array;

  let [pivot, ...elements] = array;

  return [
    ...quickSort(elements.filter(element => element < pivot)),
    pivot,
    ...quickSort(elements.filter(element => element > pivot))
  ];
}
