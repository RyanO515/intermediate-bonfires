function every(collection, pre) {
  
  var success = 0;
  
  for (var c in collection) {
    if (collection[c].hasOwnProperty(pre) && (collection[c][pre])) {
      success++;
    }
  }
  
  return success == collection.length;
}

// This challenge requires us to check if the second argument has paired
//   properties in each of the 'collection' array of objects, which must be truthy.  

// I started by decaring a variable to count the number of 'success'-ful 
//   times we 1) found the 'pre' property in collection, and
//   2) checked that that property had a truthy value.
// If the number of successes equal the number of objects in the collection argument,
//   we know that 'Everything Be True'.
  


every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
