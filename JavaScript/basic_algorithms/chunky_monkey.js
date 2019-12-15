function chunkArrayInGroups(arr, size) {
    let holderArray = [];
    let j = 0;
    // Allows the for loop to stop running when the appropriate amount of sub arrays are created to contain all numbers in arr.
    let counter = Math.ceil(arr.length / size)
    for (let i = 0; i < counter; i++) {
        //Slices off a portion of arr (of length (size), (j + size)) and pushes it into holderArray. 
        holderArray.push(arr.slice(j, j + size));
        j += size;
        
    }
    
    //If the final array in holderArray is blank, removes it.
    if (holderArray[holderArray.length - 1][0] == undefined) {
        holderArray.pop();
    }
    return holderArray;
}

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].











let number = 0;
    if (!Number.isInteger(arr.length / size)) {
        number = (arr.length / size) + 1;
    } else {
        number = (arr.length / )
        
    }






























    function Dog() {
        this.color = "brown";
        this.numLegs = 4;
        this.numLegs.colorLegs = "White";
    }