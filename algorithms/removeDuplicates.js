function removeDuplicates(array){
  let j = 0;
  for(let i = 0; i < array.length; i++)
    if(array[j] !== array[i]){
      j++
      array[j] = array[i]
    }
  return j + 1
}

console.log(removeDuplicates([1,1,1,2]))

