function binarySearch(array, value, minIndex = 0, maxIndex = array.length - 1){
  let currentIndex;
  currentIndex = Math.floor((minIndex + maxIndex) / 2);

  if(array[currentIndex] === value){
    console.log(currentIndex);
    return;
  }
  if(value > array[currentIndex]){
    minIndex = currentIndex + 1;
  }
  if(value < array[currentIndex]){
    maxIndex = currentIndex - 1;
  }
  binarySearch(array, value, minIndex, maxIndex)
}

binarySearch([1,2,3,4,5,6,7], 2)