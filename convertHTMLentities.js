function convert(str) {
  
  var characters = ["&","<",">",'"',"'"];
  var htmlSwap = ["&amp;","&lt;","&gt;", "&quot;", "&apos;"];
  
  str = str.split('');
  
  for (var i = 0; i < str.length; i++){
    for (var x = 0; x < characters.length; x++) {
      if (str[i] == characters[x]) {
        str[i] = htmlSwap[x];
      }
    }
  }
  str = str.join('');
  
  return str;
}

// The Roman Numeral challenge headache made this challenge much easier.
// I defined two arrays with identical length with character values that 
//    match the position of the HTML entity in the second array.
// From there, we split the string, find the character(and position) we need to swap, 
// and use the single '=' assignment operator to attach the new html value.
// Then join the array back to our string and boom, completed.


convert("Dolce & Gabbana");

