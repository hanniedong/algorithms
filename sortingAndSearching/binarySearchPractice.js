const binarySearch = (array, value) => {
  const binarySearchHelper(array,value,minValue, maxValue)
}

const binarySearchHelper = (array,value, minValue = 0, maxValue) =>{
  const midpoint = array.length/2
  if(array[midpoint] < value){
    minValue = midpoint
    binarySearchHelper(array, value, minValue, maxValue)
  }
  if(array[midpoint] > value){
    maxValue = array.length - 1 
    binarySearchHelper(array, value, minValue, maxValue)
  }
}
