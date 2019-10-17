function reverseString(str) {
    let array = str.split('');
    let newArray = [];
    for (let i = array.length - 1; i > -1; i--) {
        newArray.push(array[i]);
    }


    return newArray.join('');
  }
  
  reverseString("hello");
  