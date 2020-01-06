//Creates an array of arrays which return the matching DNA base pair.
function pairElement(str) {
    let array = [...str];
    // console.log(array);
    let paired = array.map(x => {
        if (x === "G") {
            return ["G", "C"];
        } else if (x ==="C") {
            return ["C", "G"];
        } else if (x === "A") {
            return ["A", "T"]; 
        } else {
            return ["T", "A"];
        }
    });
    return paired;
  }
  
  pairElement("GCG");
  
