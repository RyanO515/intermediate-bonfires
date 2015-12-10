function myReplace(str, before, after) {
  
  var index = str.indexOf(before);
  
  if (str[index] === str[index].toUpperCase()) {
    
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  str = str.replace(before, after);
  return str;
}
  
// Relatively straightforward, just identify where 'before' begins,
//    test whether it's capitalized, and if so capitalize 'after',
//    and finally swap them using .replace();
 

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

