/* exported includes */
/*
Have a function that checks if the values in an array match the value given.
And if there is a match, return true, if not return false
input(array, value) ['foo', 'bar'] 'bar'
output(boolean) return true or false
-Iterate through the array with a for loop
-if array of index is strictly equal to value.  return true
-if it doesn't return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
