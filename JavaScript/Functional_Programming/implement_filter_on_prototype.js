// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  let filterValue;
  for (let i = 0; i < this.length; i++) {
      filterValue = callback(this[i]);
      if (filterValue) {
          newArray.push(this[i]);
      }
  }
  console.log(newArray);
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
