function booWho(bool) {
    if (typeof bool == "boolean") {
        return true;
    } else {
        return false;
    }
}

//This code does the same as the above function.
//The strict equality operator "===" returns either true or false.
function booWho(bool) {
    return typeof bool === "boolean";
}