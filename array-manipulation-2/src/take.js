/* exported take */
/*
Get a function that makes an array from the beginning to whatever the count is.
input (array, count) ['foo', 'bar', 'baz', qux'] 2
output(array) ['foo', 'bar']
-Initialize an empty array named takeArray
-Make a guard and if takeArray's length is strictly equal to array's length return takeArray
-Make a loop that starts from 0 for the beginning and goes to the parameter count.
-In each loop push array of index (array[i]) into takeArray
-return takeArray
*/

function take(array, count) {
  var takeArray = [];
  if (takeArray.length === array.length) {
    return takeArray;
  }
  for (var i = 0; i < count; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
