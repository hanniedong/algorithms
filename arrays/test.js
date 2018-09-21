const removeElement = (array, element) => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
    }
  }
};
