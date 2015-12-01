function convert(num) {
   var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   var result = '';
  
   for (var i = 0; i < decimals.length; i++) {
     while (num >= decimals[i]) {
       result += roman[i];
       num -= decimals[i];
     }
   }
  return result;
}

// For an algorithm that ended up totaling 13 lines of code, this gave me a headache.

// It was my first experience figuring out the benefits of using two arrays in which each 
//   array position had a match in the paired array.
// The for-loop iterates through the 'decimals' array and the first value it is greater than,
//   saves the position, and pulls the roman numeral from the paired array using it's position.
// This numeral is saved to the result string, and the decimal value is subtracted from 'num'.
// The smaller 'num' is then iterated once again through the for loop until num = 0, 
//   and we can return our result.

convert(36);

