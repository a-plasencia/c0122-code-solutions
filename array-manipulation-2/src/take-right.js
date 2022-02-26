/* exported takeRight */
/*
Make a function that goes from the count position and gets the elements of the array
to the right of it
input (array, count) ['foo', 'bar'] 1
output: [bar]
-Make a new array named takeRightArray
-Make a guard and if the takeRightArray's length is strictly equal
to array's length or arrays length is less than count.  Return the original array
-Make a variable named takeRightCount that is the value of the
arrays length minus the count.
-Start a loop that's initialization starts from takeRightCount and goes to the length of the array
-in each loop push array of takeRightCount into the takeRightArray
*/

function takeRight(array, count) {
  var takeRightArray = [];
  var takeRightCount = array.length - count;
  if (takeRightArray.length === array.length || array.length < count) {
    return array;
  }
  for (takeRightCount; takeRightCount < array.length; takeRightCount++) {
    takeRightArray.push(array[takeRightCount]);
  }
  return takeRightArray;
}
