//Check if any element in passed array meets the criteria.
function checkPositive(arr) {
  return arr.some(function(currentValue) {
      return currentValue >= 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);
