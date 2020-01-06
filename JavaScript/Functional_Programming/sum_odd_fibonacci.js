function sumFibs(num) {
    let array = [0, 1];
    let accumulator = 1;
    //While loop creates an array of Fibonacci sequence numbers up to the value of num.
    while (accumulator < num) {
        accumulator += array[array.length - 2];
        array.push(accumulator)
    }

    //if statement removes the final array value if it is greater than num.
    if (array[array.length - 1] > num) {
        array.pop();
    }
    // console.log(array);

    //filters out any even numbers.
    let filterFunction = x => {
        return x % 2 != 0;
    }

    //applies filter and uses reduce to return the sum of all odd fibonacci numbers.
    array = array.filter(filterFunction).reduce(function(accumulator, total) {
        return accumulator += total;
    });
    return array;
}

sumFibs(4);