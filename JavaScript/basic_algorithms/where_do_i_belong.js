function getIndexToIns(arr, num) {
    // Pass this function to the sort() to sort arr by ascending order.
    function sorter(a,b) {
        return a-b;
    }

    let sortedArray = arr.sort(sorter);
    // If the array in arr is empty, return 0.
    if (sortedArray.length === 0) return 0;
    
    // for loop determines where in the array the provided num would fit.
    for (let i = 0; i < sortedArray.length; i++) {
        if (num === sortedArray[i]) {
            return i;
        } else if (num > sortedArray[i] && num < sortedArray[i + 1]) {
            return i + 1;
        } else if (num > sortedArray[sortedArray.length - 1]) {
            return sortedArray.length;
        }
  }
}
  
  getIndexToIns([40, 60], 50);

  // getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

// getIndexToIns([2, 5, 10], 15) should return 3