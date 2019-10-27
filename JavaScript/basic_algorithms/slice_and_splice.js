function frankenSplice(arr1, arr2, n) {
   // Creates two new arrays from the original arguments.
   // Both methods applied to array1 and array2 (slice and spread operator) accomplish the same thing.
   let array1 = arr1.slice(0, arr1.length)
   let array2 = [...arr2];
   
   // Adds the respective ([i]) values of array1 into array2 at index n + i;
   for (let i = 0; i < array1.length; i++) {
    array2.splice(n + i, 0, array1[i]);
   }
   return array2;
  }
  




  frankenSplice([1, 2, 3], [4, 5, 6], 1); 

 // frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
  