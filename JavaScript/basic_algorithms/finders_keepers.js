function findElement(arr, func) {
    let num = arr.filter(func);
    if (Boolean(num[0])) {
        return num[0];
    } else {
        return undefined;
    }
  }
  
  

  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

// this does the same as the above
  function findElement(arr, func) {
      return arr.filter(func)[0];
  }
