/*
Recursively divide list into n lists 
Call merge on each sublist then until combine into one list

function mergeSort(array){
  If array length < 2 
    return array 
  Create var for middle index 
  Create var for far left index 
  Create var for far right index 
  Recursively call mergeSort function 
}

function merge (node1, node2){
  create var for result array 
  While node1 length > 0 and node 2 length > 0 
    If node1[0] < node2[0]
      Shift node1 and push to result array 
    else 
      shift node2 and push to result array 
    Return concat node1 or node2(depending if node1 is empty or not)
}
*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, mid));
  var right = mergeSort(array.slice(mid, right));

  return merge(left, right);
}

function merge(node1, node2) {
  const resultArray = [];
  while (node1.length > 0 && node2.length > 0) {
    result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  }
  return resultArray.concat(node1.length ? node1 : node2);
}
