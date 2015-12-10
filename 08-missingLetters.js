function fearNotLetter(str) {
  
  var firstCharacter = str.charCodeAt(0);
  var returnLetters = '';
  var secondCharacter = '';
  
  // function to find missing letters
  var addCharacters = function(a, b) {
    while (a-1 > b) {
      b++;
      returnLetters += String.fromCharCode(b);
    }
    return returnLetters;
  };
  
  // check if letters are missing in between
  for (var i = 1; i < str.length; i++) {
    //update position
    var secondCharacter = str.charCodeAt(i);
    
    //check if difference is greater than 1;
    if (secondCharacter - firstCharacter > 1) {
      
      //call function to missing letters (a, b)
      addCharacters(secondCharacter, firstCharacter);
    }
    // update position
    firstCharacter = str.charCodeAt(i);
  }
  
  // return undefined if empty or return the missing letters
  if (returnLetters === '') {
    return undefined;
  } else {
    return returnLetters;
  }
}


// A lot going on in this challenge, I thought it would be easy!
// Knowledge of the use of 'fromCharCode' and 'charCodeAt' is pertinent.

// We first need to declare variables for first and second characters, which 
//    we will use to iterate and update through the 'str'.
// If the difference between the second character and first character (code) 
//    is ever greater than one, we need to call a function that adds the 
//    missing characters in between.  
// The function (addCharacters) takes two arguments, which uses a while loop to 
//    add any number of letters no matter how big the gap is between first and second Char.
// All of these letters are added to returnLetters variable, which is finally checked to see
//    if it's empty.  If so, it will returned undefined, and return the missing letters otherwise.


fearNotLetter("ae");

