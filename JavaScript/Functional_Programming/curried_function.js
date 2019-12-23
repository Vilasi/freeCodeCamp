function add(x) {
    return function(y) {
        return function (z) {
            return x + y + z;
        };
    };
  };
  add(10)(20)(30);
  
// Examples of Applications (In Browser Console):

/*  add(10)(20);
// function add()

add(10)(23)(30);
63
let twoParam = add(10)(20);
// undefined
twoParam(30);
// 60
let oneParam = add(10);
// undefined
oneParam(20)(30);
// 60
oneParam(20);
// function add()
*/