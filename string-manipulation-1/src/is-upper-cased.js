/* exported isUpperCased */
/*
Use a function to see if every character in the word is uppercased or not
input word(string) 'css'
output a true or false on if the function statement is true or not, in this case
it's false
-go through each letter of the function
-check if in each letter if it's capitalized or not
-if it isn't send back false
-if every letter is capitalized in the word then send back true
*/
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
