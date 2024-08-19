function arrayToList (array) {
    let list = null;
     for(let i = array.length - 1; i >= 0; i--) {
       list = { value: array[i], rest: list };
       }
    return list;
  }
  
  function listToArray (list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  
  function prepend(element, list) {
    return {
      value: element,
      rest: list
    };
  }
  
  function nth(list, index) {
    if (list === null) {
      return undefined; 
      return list.value; 
      return nth(list.rest, index - 1);
    }
  }