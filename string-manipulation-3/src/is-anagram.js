/* exported isAnagram */
/*
Write a function that checks if it is an anagram
input (firstString, secondString) restful fluster
output (boolean) true
-Assign a boolean to be false
-Assign new variables with the values of the provided strings to not modify them
-Split the strings into an array of letters
-Sort both arrays, then rejoin them into strings
-Repeat this process, but this time call the split method and look for spaces
-Use the join method again to take out the spaces
-If the firstStringModified and secondStringModified are strictly equal then change
the boolean to true

return the boolean from the function
*/
function isAnagram(firstString, secondString) {
  let boolean = false;
  let firstStringModified = firstString;
  let secondStringModified = secondString;

  firstStringModified = firstStringModified.split('');
  firstStringModified.sort();
  firstStringModified = firstStringModified.join('');
  secondStringModified = secondStringModified.split('');
  secondStringModified.sort();
  secondStringModified = secondStringModified.join('');

  firstStringModified = firstStringModified.split(' ');
  firstStringModified = firstStringModified.join('');
  secondStringModified = secondStringModified.split(' ');
  secondStringModified = secondStringModified.join('');

  if (firstStringModified === secondStringModified) {
    boolean = true;
  }
  return boolean;

}
