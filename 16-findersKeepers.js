function find(arr, func) {
  
 // declare global num variable
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}


//.filter() is not necessary for this simple exercise.  All we need to do is iterate through arr and 
//  find the first value that returns true for the test function.  Set that first value equal to num 
//  and return it. 

// if we needed to use .filter(), here is the answer:

//function find(arr, func) {
  
//  arr = arr.filter(function(val) {
//    return func(val);
//  });
  
//  return arr[0];
//};

find([1, 3, 5, 9], function(num){ return num % 2 === 0; });
