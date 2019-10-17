function findLongestWordLength(str) {
    //Captures all words in string (assuming only alphabetical characters).
    let regex = /\w+/gi;
    let matches = str.match(regex);
    let largestWord = 0;
    let wordToReturn = '';
    for (let i = 0; i < matches.length; i++) {
        //Updates which word length is currently the largest.
        if (matches[i].length > largestWord) {
            largestWord = matches[i].length;
            wordToReturn = matches[i];
            console.log(largestWord);
            console.log(wordToReturn);
        }
    }
    return largestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  