/* exported firstChars */
/*
input (string) 'All Code All Day'
output(string) 'All Code'
Make a function that takes the characters from the start of the string to
whatever the length is.
-Make a variable firstCharacters to contain the string.
-Call the slice method on firstCharacters with two arguments,
0 to grab the start of the string and go as far as length.
-Return firstCharacters
*/
function firstChars(length, string) {
  var firstCharacters = string;
  firstCharacters = firstCharacters.slice(0, length);
  return firstCharacters;
}
