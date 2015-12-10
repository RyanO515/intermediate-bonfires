function sumAll(arr) {
  
  // Find the min and max in the array
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  var total = 0;
  
  //for-loop that will iterate and sum all values inbetween and including min and max.
  for (var i = min; i <= max; i++) {
    total += i;
  }
  
  return total;
}



sumAll([1, 4]);

