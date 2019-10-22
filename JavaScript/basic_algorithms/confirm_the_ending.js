function confirmEnding(str, target) {
    //Splits both parameters into arrays and reverses them.
    let stringArray = str.split('');
    let targetArray = target.split('');
    stringArray = stringArray.reverse();
    targetArray = targetArray.reverse();
    let testArray = [];
    //Makes a new array that only contains the characters which are being tested for a match.
    for (let i = 0; i < targetArray.length; i++) {
        testArray.push(stringArray[i]);
    }
    //Joins the target parameter and the new test array into strings.
    testArray = testArray.join('');
    targetArray = targetArray.join('');
    //Checks if the string are equivalent.
    if (testArray == targetArray) {
        return true;
    } else {
        return false;
    }
}

// This challenge is only to use basic substring methods.