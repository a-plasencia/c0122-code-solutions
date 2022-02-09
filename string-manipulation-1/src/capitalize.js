/* exported capitalize */
/*
Create a function that capitlizes the first letter of the word and leaves the rest lowercase
input: word(string) 'hI'
output: 'Hi'
Make a new copy for the word and make it lowercase
-create a storage for the first letter of the lowercased word
-Make that storage uppercase
-create a final storage that combines the uppercased letter and the rest of the word
after the first letter
-give back the final storage of the word that is properly capitalized
*/
function capitalize(word) {
  var lowerCaseWord = word.toLowerCase();
  var firstLetter = lowerCaseWord.charAt(0);
  var capitalFirstLetter = firstLetter.toUpperCase();
  var capitalizeWord = capitalFirstLetter + lowerCaseWord.slice(1);
  return capitalizeWord;
}
