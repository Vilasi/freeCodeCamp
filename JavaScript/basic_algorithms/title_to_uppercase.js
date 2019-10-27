// This function takes any string and returns it as a title with individually capitalized words.
function titleCase(str) {
    //Makes string all lowercase and splits it into an array of individual words.
    let string = str.toLowerCase();
    string = string.split(" ");

    // Variables for use within for loops.
    let capitalArray = [];
    let lowerCaseArray = '';

    // i loop creates an array (capitalArray) of only capital letters of each element in string array.
    for (let i = 0; i < string.length; i++) {
        capitalArray.push(string[i][0].toUpperCase());

        // j loop creates a string of all letters from the string array which are not capitalized. (string[i][j >= 1])
        for (let j = 1; j < string[i].length; j++) {
            lowerCaseArray += string[i][j];
        }

        //Concatenates array of uppercase letters to string of lowercase letters.
        capitalArray[i] += lowerCaseArray;
        lowerCaseArray = [];
    }
  return capitalArray.join(' ');
}
  


  titleCase("iT tOok ME tWo HouRS To WrItE tHiS");

//This does the same thing with a regular expression and arrow function - using the .replace() inbuilt function. 
  function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }