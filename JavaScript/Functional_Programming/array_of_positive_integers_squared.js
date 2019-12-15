const squareList = (arr) => {
    //filter callback function. Returns only positive integers.
    let positiveIntegerFilter = x => x % 1 === 0 && x > 0;

    //Applies the filter, and returns an array with filtered items squared.
    let positiveIntegersSquared = arr.filter(positiveIntegerFilter).map(x => {
        return x * x;
    });
    return positiveIntegersSquared;
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
