function steamroller(arr) {
  
  var flatArr = [];                    // Declare array to return
  
  var flatten = function(arg) {        // Add element if not an array value.
    if (!Array.isArray(arg)) {
      flatArr.push(arg)
    } else {
      for (var a in arg) {             // Steamroll
        flatten(arg[a]);               // Recursion
      }
    }
  }
  arr.forEach(flatten);                // Add each element as an argument in flatten
  return flatArr;
}

//On this challenge I used a recursive function 'flatten' to loop through the array 
//and add the element if it is not an array.  If it is an array, we keep using recursion 
//to 'steamroll' the arrays down until we have added all elements into flatArr, 
//which we return. The .isArray() method of the Array object is what gave the algorithm 
//the logic to keep the function recursive

steamroller([1, [2], [3, [[4]]]]);
