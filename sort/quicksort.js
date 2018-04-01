const quickySort = array => {
    if (array.length === 0) return [];
    let [pivot, ...elements] = array; 
    return [
        ...quickySort(elements.filter(y => y < pivot)),
        pivot,
        ...quickySort(elements.filter(y => y >= pivot))
    ];
};
let array = [1,7,2,4]
quickySort(array)


function quickSort(array){
  if(array.length ===0){
    return [];
  }
  let pivot = array[Math.floor(Math.random()*array.length)];
  let { lessThan, equalTo, greaterThan} = sortAtPivot(array, pivot)

  return [...quickSort(lessThan), ...equalTo, ...quickSort(greaterThan)];
}

function sortAtPivot(array, pivot){
  let lessThan = [];
  let equalTo = [];
  let greaterThan = [];

  array.forEach(element=>{
    if(element < pivot){
      lessThan.push(element);
    }else if (element === pivot){
      equalTo.push(element);
    }else{
      greaterThan.push(element);
    }
  });
  return {lessThan, equalTo, greaterThan};
}
