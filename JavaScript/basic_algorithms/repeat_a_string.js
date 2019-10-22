function repeatStringNumTimes(str, num) {
    let newString = "";
    if (num <= 0) {
        return str = "";
    } else if (num == 1) {
        return str;
    } else {
        for (let i = 0; i < num; i++) {
            newString += str;
        }
        return newString;
    }
  }