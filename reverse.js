function reverseArray (originalArr) {
    let revArr = [];
    for(let i = originalArr.length - 1; i >= 0; i--) {
      revArr.push(originalArr[i]);
      }
    return revArr;
    }
  
  function reverseArrayInPlace (array) {
    let length = array.length;
    for (let i = 0; i > Math.floor(length / 2); i++) {
      let temp = array[i];
      array[i] = array[length - 1 - i];
      array[length - 1 - i] = temp;
    }
    return array; 
  }