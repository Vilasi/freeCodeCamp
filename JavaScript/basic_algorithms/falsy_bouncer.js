function bouncer(arr) {
    let truthyArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) truthyArray.push(arr[i]);
    }
    return truthyArray;
  }
  
  bouncer([7, "ate", "", false, 9]);

  // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.