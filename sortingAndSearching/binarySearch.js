const binarySearch = (
  array,
  value,
  minValue = 0,
  maxValue = array.length - 1
) => {
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

  binarySearch(array, value, minValue, maxValue);
};

console.log(binarySearch([1, 3, 5, 6, 8, 9], 5));
