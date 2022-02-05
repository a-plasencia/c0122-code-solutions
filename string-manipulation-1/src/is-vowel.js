/* exported isVowel */
/*
Make a function that checks whether or not the letter is a vowel or not
input character(string) 'e'
output true
-store the character in a new storage
-with the new storage, make everything in it lowercase
-check if the new storage's letter is a, e, i, o, or u
-if it is send back true
-if it is not send back false
*/

function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' ||
 character === 'o' || character === 'u' || character === 'A' || character === 'E' ||
 character === 'I' || character === 'O' || character === 'U') {
    return true;
  } else {
    return false;
  }
}
