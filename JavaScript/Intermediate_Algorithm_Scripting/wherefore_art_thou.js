function whatIsInAName(collection, source) {
    // What's in a name?
    let array = collection.filter(function(item) {
        //for each item in collection, loop through source and check if source[i] is contained as item[i];
        //return false for every item[i] that does not match source[i];
        //remainder is only true values (source[i] == item[i])
        for (let i in source) {
            if (source[i] != item[i]) {
                console.log(i);
                console.log(source[i]);
                console.log(item[i])
                return false;
            }; 
        };
        return true;
    });                                                
    return array;
    
  };
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  


  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].