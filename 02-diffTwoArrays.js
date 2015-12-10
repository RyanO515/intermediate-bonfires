function diff(arr1, arr2) {
  
  newArr = [];
  
  newArr = arr1.concat(arr2).filter(function(val) {
    return !(arr1.indexOf(val) > -1 && arr2.indexOf(val) > -1);
  });
  
  
  return newArr;
}

// We need to filter our two array arguments after concatenating them.  
// Even though we concatenated our array, we can still use our arguments
//    'arr1' and 'arr2' to test whether we have a unique value.
// We use && to make sure that each value either exists in arr1 <<OR>> arr2, 
//    but not in both. If a value exists in an array, the indexOf will return
//    the position of the value in the array, which will be 0 or greater.

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
