/* exported numVowels */
/*
make a function that counts how many vowels are in a string
input (string) 'hi hOw are you'
output (number) 6
-make a counter variable and set it to 0
-go through each letter in the string
-if you see an a, e, i, o or u, increment the counter by 1
-return the counter
*/

function numVowels(string) {
  var lowercaseString = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < lowercaseString.length; i++) {
    if (lowercaseString[i] === 'a' || lowercaseString[i] === 'e' ||
      lowercaseString[i] === 'i' || lowercaseString[i] === 'o' || lowercaseString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
