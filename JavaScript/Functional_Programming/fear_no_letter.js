function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = [...alphabet];
    let testString = [...str];
    let start = alphabet.indexOf(testString[0]);
    let end = alphabet.indexOf(testString[testString.length - 1]);
    let sectionToTest = alphabet.slice(start, end + 1);

    for (let i = 0; i < sectionToTest.length; i++) {
        if (sectionToTest[i] != testString[i]) {
            return sectionToTest[i];
        }
    }
}

fearNotLetter("abce");
