/* exported ransomCase */
/*
ransomCase(string)
output: every even letter is uppercase while every odd letter is lowercase
-put the given string in a new variable and make the whole string lowercase
-make a new variable to hold the ransomCased word
-check through each letter in the word
-if the individual letter is at an odd number, make the word lowercase.
And put the odd letter in the variable ransomWord
-if the individual letter is an even number, make the word uppercase
And put the even letter in the variable ransomWord
-return the ransomcased word.
*/

function ransomCase(string) {
  var ransomString = string;
  var ransomWord = '';
  for (var i = 0; i < ransomString.length; i++) {
    if (i % 2 === 0) {
      ransomString = ransomString.toLowerCase();
      ransomWord = ransomWord + ransomString.charAt(i);
    } else {
      ransomString = ransomString.toUpperCase();
      ransomWord = ransomWord + ransomString.charAt(i);
    }
  }
  return ransomWord;
}
