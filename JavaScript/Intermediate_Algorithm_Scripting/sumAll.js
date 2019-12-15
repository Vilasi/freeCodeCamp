//Sum all numbers (Inclusive)
function sumAll(arr) {
  const MAX = Math.max(...arr);
  const MIN = Math.min(...arr);
  let arrayOfNumbers = [];
  for (let i = MAX; i >= MIN; i--) {
      arrayOfNumbers.push(i);
  };
  
  return arrayOfNumbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
  }, 0);
}

sumAll([1, 4]);