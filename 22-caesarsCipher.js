function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  
  // loop through codeArr
  codeArr.forEach(function(letter) {
    //find unicode value
    var unicode = letter.charCodeAt(0);
    
    
    //if capitalized letter A-Z
    if (unicode > 64 && unicode < 91) {
      
      
      //Find where to add or subtract 13
      if (unicode < 78) {
        unicode += 13;
      } else {
        unicode -= 13;
      }
      //get new letter and push to decodedArr
      letter = String.fromCharCode(unicode);
      decodedArr.push(letter);
    } 
    //return misfits as-is
    else   {
         decodedArr.push(letter);
    }
  });
  
  
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
