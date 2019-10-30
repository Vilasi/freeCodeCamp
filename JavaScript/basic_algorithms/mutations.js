//Checks to see if the first string within arr (arr[0]) contains all of the characters within the second string (arr[1]).
function mutation(arr) {
    let stringToCheck = arr[0];
    let charactersToLookFor = arr[1];
    for (let i = 0; i < charactersToLookFor.length; i++) {
      //Creates a new regex per character of arr[1].
      //If any character fails the test, exits function and returns false.
      let regex = new RegExp(charactersToLookFor[i], "gi")
      if (!regex.test(stringToCheck)) {
        return false;
      } 
    }
    return true;
    
  }
  
  mutation(["hello", "hey"]);

  //loop that makes one character a regex
  //within loop, tests string for that character - returns true if present
  //if all characters return true (no characters return false), return true.