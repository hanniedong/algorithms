const binarySearch = (array, value) => {
  return binarySearchHelper(
    array,
    value,
    (minValue = 0),
    (maxValue = array.length - 1)
  );
};

const binarySearchHelper = (array, value, minValue, maxValue) => {
  let midpoint = Math.floor(minValue + maxValue / 2);
  if (array[midpoint] === value) {
    return midpoint;
  }
  if (array[midpoint] < value) {
    minValue = midpoint;
  }
  if (array[midpoint] > value) {
    maxValue = midpoint;
  }

  binarySearchHelper(array, value, minValue, maxValue);
};

binarySearch([1, 3, 5, 6, 8, 9], 5);
