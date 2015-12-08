function unite(arr1, arr2, arr3) {
  
  var finalArray = [];
  
  for (var i = 0; i < arguments.length; i++) {
    var arrayArgs = arguments[i];
    
    for (var x = 0; x < arrayArgs.length; x++) {
      indexArg = arrayArgs[x];
      
      if (finalArray.indexOf(indexArg) < 0) {
        finalArray.push(indexArg);
      }
    } 
  }
  return finalArray;
}


// In this challenge, the main learning aspect was the use of the arguments object.
// The use of our first for loop is to iterate through all (2 or greater) arguments,
//    and keep each argument in 'arrayArgs' for use in 2nd for-loop.
// Use of the second for loop is to iterate through a single argument array, keep each
//    value in indexArg variable for if-statement testing, and push each new and unique  
//    value to the 'finalArray'.
// Sorting the array was not asked for in the challenge so we simply return
//    the array with each unique value from all argument arrays.
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
