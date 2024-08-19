let arrays = [[1, 2, 3], [4, 5], [6]];
let flatArr = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
