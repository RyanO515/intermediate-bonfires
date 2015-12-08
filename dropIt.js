function drop(arr, func) {
  
 times = arr.length;
  
  for (var i = 0; i < times; i++) {
    // All values will be the first in array as the false values are shifted off.
    if (func(arr[0])) {                
      break;                           
    } else {
      arr.shift();
    }
  }
  return arr;
}

// In this challenge we needed to iterate through the array, shifting off
// all array values until we find the first value that returns true,
// then return the remaining array. 

drop([1, 2, 3, 4], function(n) {return n > 5; });
