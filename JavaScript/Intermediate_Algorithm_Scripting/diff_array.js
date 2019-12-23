function diffArray(arr1, arr2) {
    let newArray = arr1;
    //Concats the two arrays together, and sorts them alphabetacally/numerically.
    newArray = newArray.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    //Filters to create a new array containing only values that occur only once.
    return newArray = newArray.filter(function(value) {
        return newArray.indexOf(value) == newArray.lastIndexOf(value);
    });
    
    
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


88 91 94 120 191 411 413