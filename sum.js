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
      