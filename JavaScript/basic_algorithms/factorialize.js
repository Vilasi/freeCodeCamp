/*For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */

function factorialize(num) {
    let factorialArray = [];
    if (num === 0) return 1;
    for (let i = num; i >= 1; i--) {
        // factorialArray now contains all factorial digits of num
        factorialArray.push(i);
    } 
    //Multiplies all factorial digits together into one product.
    let reducer = (accumulator, currentValue) => accumulator * currentValue;

    return factorialArray.reduce(reducer);
  }
  
  factorialize(5);
  