function add() {
  
  // declare function to check if number or undefined
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else {
      return num;
    }
  };
  
  // if passed in two arguments
  if (arguments.length == 2) {
    
    // check if numbers
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    
    // if both numbers, add them
    if (a && b) {
      return a + b;
    } 
  }
  
  // if passed in one argument
  if (arguments.length == 1) {
    
    //check first argument is a number
    var m = checkNum(arguments[0]);
    if (!m) {
      return undefined;
    }
    
    //callback function to add if second argument is a number
    return function(n) {
      if (checkNum(n)) {
       return m + n;
      } 
    };
  }
}

// This challenge requires use of array notation to add an unknown length of arguments
//    passed into the 'add' function. If only one argument 'm' is passed in, we still
//    expect a second argument, so a callback function is included to collect
//    the second argument 'n' to add to 'm'. If two arguments are passed we simply add them.
// The checkNum function allows us to test every argument we are passed. 
//    If any arguments are not numbers, we use typeof to return 'undefined'.

add(3, 4);

