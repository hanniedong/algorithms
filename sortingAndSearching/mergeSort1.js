function mergeSort(array){
  if (array.length === 0) return array;
  let middle = Math.floor(array.length/ 2);
  let right = array.splice(middle)
  let left = array.splice(0, middle)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}