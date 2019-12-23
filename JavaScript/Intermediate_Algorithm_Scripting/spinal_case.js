function spinalCase(str) {
    //regex for matching any spaces or underscores in str.
    let spacesAndUnderscores = /\s+|_+/gi;

    //replaces any lowercase-to-uppercase letters (ex: lT in AllThe) with the matched letters (Capture group $1)(Capture group $2) separated by a space
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    str = str.toLowerCase()

    //replaces the regex matches with: "-"
    return str = str.replace(spacesAndUnderscores, "-");
    // return str;
  }
  
  spinalCase('This Is Spinal Tap');

  spinalCase("The_Andy_Griffith_Show");
  
  spinalCase("AllThe-small Things");