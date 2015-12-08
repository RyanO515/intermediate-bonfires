function sumFibs(num) {
  
  var previous = 0;
  var current = 1;
  var result = 0;
  
  while (current <= num) {
    
    if (current % 2 !== 0) {
      result += current;
    }
    
    var added = previous + current;
    previous = current;
    current = added;
  }
  
  return result;
}


// Simple Fibonacci challenge where we keep updating previous and current
// values until we reach 'num'.  Only rule we have is to check whether those
// fibonacci numbers are odd, which if true, will be added to the 'result' variable.

sumFibs(4);
