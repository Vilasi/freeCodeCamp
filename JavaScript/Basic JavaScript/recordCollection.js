          // Setup
          var collection = {
            "2548": {
              "album": "Slippery When Wet",
              "artist": "Bon Jovi",
              "tracks": [ 
                "Let It Rock", 
                "You Give Love a Bad Name" 
              ]
            },
            "2468": {
              "album": "1999",
              "artist": "Prince",
              "tracks": [ 
                "1999", 
                "Little Red Corvette" 
              ]
            },
            "1245": {
              "artist": "Robert Palmer",
              "tracks": [ ]
            },
            "5439": {
              "album": "ABBA Gold"
            }
        };
        // Keep a copy of the collection for tests
        var collectionCopy = JSON.parse(JSON.stringify(collection));
        
        // Only change code below this line
        function updateRecords(id, prop, value) {
            if (!value) {
            //this deletes the given property and haults the function.
              delete collection[id][prop];
              return collection;
            }
            if (prop !== "tracks" && value) {
              collection[id][prop] = value;
            } else if (prop == "tracks" && !collection[id][prop]) {
              collection[id].tracks = [];
              collection[id].tracks.push(value);
            } else if (prop == "tracks" && collection[id][prop]) {
              collection[id].tracks.push(value);
            }
            
            return collection;
          }
          
        // Alter values below to test your code
        updateRecords(5439, "artist", "ABBA");
        

 /* If the prop is “tracks” and value is non-blank, check to see if the given element in the array has the property of “tracks”. 
If the element has the property of “tracks”, push the value onto the end of the “tracks” array. 
If the element does not have the property, create the property and value pair.


 For the given id parameter, which is associated to the collection object:

If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
If value is an empty string, delete that prop from the object.

Finally, return the collection object. */





       