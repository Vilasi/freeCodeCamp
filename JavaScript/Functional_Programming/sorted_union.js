function uniteUnique(arr) {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            array.push(arguments[i][j]);
        }
    }
 
    array.forEach(value => {
        for (let i = array.indexOf(value); i >= 0; i--) {
            if (array.indexOf(value) != array.lastIndexOf(value)) {
                array.splice(array.lastIndexOf(value), 1)
            } 
        }; 
    });
    return array;
    
  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


  


  Array(3) [ 3, 5, 4 ]