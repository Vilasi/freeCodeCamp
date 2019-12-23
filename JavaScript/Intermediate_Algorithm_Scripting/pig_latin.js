function translatePigLatin(str) {
    //matches words who's first letters are a vowel.
    let firstVowelCheck = /^[aeiou]/
    
    //matches words that contain a vowel.
    let totalVowelCheck = /[aeiou]/

    //matches splits between consonant letters and vowels.
    let consonantCheck = /(?=[aeiou])/
    if (firstVowelCheck.test(str)) {
        str += "way";
    } else if (!totalVowelCheck.test(str)) {
        str += "ay";
    } else {
        let splitStringArray = str.split(consonantCheck);
        splitStringArray.push(splitStringArray[0]);
        splitStringArray.shift();
        splitStringArray.push("ay");
        return str = splitStringArray.join("");
        //splits into array of consonant/vowel groups.
        //pushes the first consonant group to the end of the array.
        //removes first consonant group from array[0].
        //pushes "ay"
        //returns joined string.
    }
    return str;
  }
  
  translatePigLatin("consonant");
  

/* Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase. */

Array(4) [ "c", "ons", "on", "ant" ]