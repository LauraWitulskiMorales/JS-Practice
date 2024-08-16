function range (start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  function sum (numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
      

  // Bonus
  function range (start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
   } else {
      for (let i = start; i >= end; i += step) {
        result.push(i)
      }
    }
    return result;
  }