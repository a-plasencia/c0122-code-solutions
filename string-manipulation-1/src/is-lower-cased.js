/* exported isLowerCased */
/*
Make a function to check if every letter in the word is lowercased or not
input word(string) 'hI'
output: false
-go through each letter at a time
-on each letter, check if that letter is lowercased or not
-if it is not lowercased, send back false
-if every letter is lowercased, send back true
*/
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
