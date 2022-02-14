/* exported capitalizeWord */
/*
Make a function that capitalizes each word as appropiate
input(string) 'aLeX'
output(string) 'Alex'
-make a copy of the word and make it lowercase
-if it's javascript return 'JavaScript'
-make a Storage to get the first letter
-if it's not then take the first letter of the lowercased word
-make that first letter uppercased
-take that uppercased first letter, and add it to the lowercased word from the
second letter on
-give back the capitalized word
*/

function capitalizeWord(word) {
  var js = 'JavaScript';
  var lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    return js;
  }
  var firstLetter = lowerCaseWord.charAt(0);
  var capitalizeWord;
  firstLetter = firstLetter.toUpperCase();
  capitalizeWord = firstLetter + lowerCaseWord.slice(1);
  return capitalizeWord;

}
