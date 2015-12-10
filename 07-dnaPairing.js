function pair(str) {
  
 var resultArr = [];
 
 var bpA = ["A","T"];
 var bpT = ["T", "A"];
 var bpC = ["C", "G"];
 var bpG = ["G", "C"];
  
  str = str.split('');
  
  for ( var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        resultArr.push(bpA);
        break;
      case "T":
        resultArr.push(bpT);
        break;
      case "C":
        resultArr.push(bpC);
        break;
      case "G":
        resultArr.push(bpG);
        break;
      default:
        break;
    }
    
  }
  return resultArr;
  
}

//Finally got to make use of a switch statement! Very effective in this challenge

// Declare base pair variables
// Use for loop to iterate through each character and attach its pair element
// Push each base pair into the 'resultArr'.

pair("GCG");

