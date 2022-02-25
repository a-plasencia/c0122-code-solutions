/* exported lastChars */
/*
input(string) 'All Code All Day'
output(string) ' All Day'
Make a function that starts from the length and gets the rest of the string.
-Create a variable lastCharacters and make it equal to string.
-Call the split method with one argument and make it the length parameter.
Since we only want the length from the end of the string back call length with
a negative (-length)
-Return lastCharacters
*/

function lastChars(length, string) {
  var lastCharacters = string;
  lastCharacters = lastCharacters.slice(-length);
  return lastCharacters;
}
