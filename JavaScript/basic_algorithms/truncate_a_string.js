function truncateString(str, num) {
    let string = "";
    if (str.length <= num) {
        return str;
    } else {
        //Cuts off the string at a length of parameter num.
        string = str.slice(0, num) + "...";
        return string;
    }
  }