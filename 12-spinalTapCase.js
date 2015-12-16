function spinalCase(str) {
  
  // variable to identify white space and underscores
  var regex = /\s+|_+/g;
  
  // capture all lowercaseUPPERCASE with lowercase UPPERCASE  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  
  //return regex matches with '-' and lowercase string.  
  str = str.replace(regex, '-').toLowerCase();
  
  return str;
}


// This challenge made use of Regular Expressions.  
// I first made a variable that will match all whitespace and underscores
// Then the first replace method -line 7- matches and remembers all occurrences
//    of lowercase letters meeting uppercase characters. This process is called
//    capturing, and the match is recalled from the resulting array's elements, 
//    numbered [1]-...-[n] preceeded by the RegExp object's property '$'.
// Once I have added whitespace inbetween our two lowercase and uppercase characters,
//    I replace the whitespace with '-'.  
// Lastly, the entire string is lowercased and returned.

spinalCase('thisIsSpinalTap');
