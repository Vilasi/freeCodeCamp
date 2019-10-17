function largestOfFour(arr) {
    let largestNumber = -Infinity;
    let arrayOfLargestNumbers = [];
    //Iterates through each subarray.
    for (let i = 0; i < arr.length; i++) {
        //Iterates through each item within each subarray.
        for (let j = 0; j < arr[i].length; j++) {
            //Compares current number to the current largest number. 
            //Sets largestNumber to that value until the end of the loop is reached - finding the largest number.
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
                console.log(largestNumber);
            }
        } 
        arrayOfLargestNumbers.push(largestNumber);
        largestNumber = -Infinity;
        
        
    }
    return arrayOfLargestNumbers;
    
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
  