/* exported capitalizeWords */
/*
Have a function that capitalizes each individual word and returns a sentence
input (string) example: hello world
output(string) example: Hello World
-Make a variable sentence that holds the value of the entire string lowercased
-Take the string and split each word and hold that list of words
-Go through each word in the list, at the first letter capitalize it.
Then use the substring and add everything after the first letter to the word.
-use the join method and seperate each word with a space (' ') and returns each individual word capitalized
*/

function capitalizeWords(string) {
  var sentence = string.toLowerCase();
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i][0].toUpperCase();
    words[i] = firstLetter + words[i].substring(1);
  }
  words = words.join(' ');
  return words;
}
