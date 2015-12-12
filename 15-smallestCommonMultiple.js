function smallestCommons(arr) {
  
 arr.sort(function(a, b) {
    return b - a;
  });

  // Create newArr to list all values in descending order.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables: quotient is the smallest common multiple to return, loopNum is the current iteration.
  var quotient = 0;
  var loopNum = 1;
  var n;

  // run code until we iterate through newArr
  do {
    quotient = newArr[0] * loopNum * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quotient % newArr[n] !== 0) {
        break;
      }
    }

    loopNum++;
  } while (n !== newArr.length);

  return quotient;

}

// Took me quite a while to wrap my mind around this one.  What we want to start by 
//pushing all values inbetween our beginning array (arr) into a new array [newArr].  
//Then find the least common multiple that works for each number inbetween our 
//starting max and min values.  Do this by iterating through with the foor loop, and 
//testing each number in newArr using the modulo.  If it does not return zero, 
//the loop breaks and loopNum needs to increment.  Notice before the for loop starts, 
//newArr[0] and newArr[1] refer to the max and min values we start with, in this case 1 & 5


smallestCommons([1,5]);
