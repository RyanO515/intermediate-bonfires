function translate(str) {
  
  
  var first = str[0];
  var second = str[1];
  
  if (first === 'a'|| first== 'e'|| first == 'i' || first== 'o' || first == 'u') {
    str =  str + "way";
  } else {
    
    if (second == 'a'|| second == 'e' || second == 'i'|| second == 'o'|| second == 'u') {
      str = str.substr(1) + str[0] + "ay";
    } else {
    str = str.substr(2)+ str[0] + str[1] + "ay";
    }
  }
 return str;
}


// I'm still in the process of working out a more consise algorithm for this one.

// I completed the challenge by first looking at whether the 'str' starts with a vowel.
// If not, if the second letter is a vowel.
// Those are the only variables which would change the word to something unique;
//   all other cases that begin with consonants are worked out last.

translate("glove");

