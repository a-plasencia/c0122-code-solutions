/* exported isPalindromic */
/*
Create a function that checks if the string is a palindrome
input(string) 'racecar'
output(boolean) true
-Create a first string that copies the original string
-Create a second string so you can compare it with the first string later.
-Use the split method to check for any spaces in the string.
-If the length is one,
  Run for loop to go through the string and start from the length and decrement until zero
  Concatenate the letter of the string on to the secondString variable
  After the for loop, check if string is strictly equal to secondString, if it is then return true.
  If it isn't return false
*/

function isPalindromic(string) {
  var firstString = string;
  firstString = firstString.split(' ');
  var secondString = '';
  if (firstString.length === 1) {
    for (let i = string.length - 1; i >= 0; i--) {

      secondString = secondString + string.charAt(i);
    }
    if (string === secondString) {
      return true;
    } else { return false; }

  } else if (firstString.length !== 1) {
    firstString = firstString.join('');
    for (let i = firstString.length - 1; i >= 0; i--) {
      secondString = secondString + firstString.charAt(i);
    }
    if (firstString === secondString) {
      return true;
    } else { return false; }
  }
}
