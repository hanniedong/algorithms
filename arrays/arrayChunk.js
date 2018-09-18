function chunk(array, size) {
  //want to create mini arrays of size
  //return an array of arrays
  const chunkArray = [];
  for (i = 0; i < array.length; i += size) {
    const subArray = array.slice(i, i + size);
    chunkArray.push(subArray);
  }
  return chunkArray;
}
