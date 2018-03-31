function quickSort(array){
  if(array.length === 0 ) return [];
  let [pivot, ...elements] = array;
  return[ ...quickSort(elements.filter(element => element < pivot)), pivot, ...quickSort(elements.filter(element => element > pivot))]
}

quickSort([1,6,2,5,8,2])

function quickSort(array){

  if(array.length === 0) return [];
  let [pivot, ...elements] = array;
  return [...quickSort(elements.filter(element=> element < pivot)), pivot, ...quickSort.elements.filter((element => element > pivot))]
}