function sumPrimes(num) {
  
  
  
  var total = [];
  
  function checkPrime(number) {
    var sqrt = Math.sqrt(number);
    
    for (var i = 2; i <= sqrt; i++) {
      if ( number % i === 0) {
        return false;
      } 
    }
    return true;
  }
  
  
  
  for (var p = 2; p <= num; p++) {
    
    if (checkPrime(p)) {
      total.push(p);
    } 
  }
  
  var added = total.reduce(function(a, b) {
    return a+b;
  });
  
  return added;
}
  
  
  // Had to consult StackOverflow on this challenge to find the simplest way to 
  // test for prime numbers.  I use the checkPrime function after iterating through
  // all numbers less than 'num' to check for primes, pushing those that are into 
  // an array 'final'. .  A simple reduce function will return the sum of this array.
  
  // Found the easiest way to check for primes is to find the square root of the number,
  // which is the highest you need to check to see if the number is divisible by any other number       
  // besides 1 and itself.  If not, we have our prime to push to 'final'.
  
  

sumPrimes(977);
