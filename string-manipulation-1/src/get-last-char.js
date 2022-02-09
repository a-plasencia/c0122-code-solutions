/* exported getLastChar */
/*
Get the last character of the string
input: word (string) 'LearningFuze'
output: character 'e'
Make a storage to hold the last character
Go through the word until you hit a space to find out how long it is
Go back one when you hit the space to get the last letter
and store where that is
Put that storage in the one that will hold the last letter of the word.
give back the storage that is holding the last letter of the word
*/
function getLastChar(string) {
  var word = string.length - 1;
  var lastChar = string.charAt(word);
  return lastChar;
}
