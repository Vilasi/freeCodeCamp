function destroyer(arr) {
    //Sets i to the final index of the arguments. Finishing at arguments[1].
    for (let i = arguments.length - 1; i > 0; i--) {
        //Sets j to the final index of arguments[0]. Decrements down and splices out value if passing conditional.
        for (let j = arguments[0].length - 1; j >= 0; j--) {
            if (arguments[0][j] === arguments[i]) {
                arguments[0].splice(j, 1);
            }
        }
    }
    return arguments[0];
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  