// the global variable
var globalTitle = "Winter Is Coming";


function urlSlug(title) {
    //Splits the string into individual words using Regex .match()
    let splitArray = title.match(/\S+/gi)
    console.log(splitArray);

    
    //For each array object, transform to lowercase using .map()
    let lowercaseArray = splitArray.map((x) => {
        x = x.toLowerCase();
        
        return x;
    });
    //Returns the array as a string concatenated with a "-"
    return lowercaseArray.join("-");
}


var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
