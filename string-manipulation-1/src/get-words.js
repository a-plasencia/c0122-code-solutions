/* exported getWords */
/*
Make a function that takes a sentence and seperates each word and then puts
each word in a  list
input: getwords(string) "Have a good day"
output: words["have", "a", "good", "day"]
-Make a storage to store each word
-store each letter
-check if the string is empty.  If it is give back an empty list
-iterate through the string one by one
-if you see a space, then put that word in the list
-go through each part of the sentence.  If you see a space, then put what you've
taken into the list
-clear the space
-give back the list of words
*/
function getWords(string) {
  var wordsOfSentence = [];
  var currentWord = '';
  var length = string.length;
  if (length === 0) {
    return wordsOfSentence;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord = currentWord + string[i];
    } else {
      wordsOfSentence.push(currentWord);
      currentWord = '';
    }
  }
  wordsOfSentence.push(currentWord);
  return wordsOfSentence;
}
