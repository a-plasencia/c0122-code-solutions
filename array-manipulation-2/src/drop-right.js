/* exported dropRight */
/*
Make a function that gets the elements from the array that starts
from the beginning and goes to the length of the array minus the count.
input (array, count) ['foo', 'bar']
output ['foo']
-Make a new variable named dropRightArray and initalize an empty array
-Make a new variable named dropRightCount and make it's value the result of
the length of the array minus the count.
-Make a guard and if the legnth of dropRightArray is strictly equal
to the length of the parameter array, return the array
-Start a for loop that starts from the variable i =0, and goes to dropRightCount, and increment i
each time
-call the push method of dropRightArray with the argument array of i
*/

function dropRight(array, count) {
  var dropRightArray = [];
  var dropRightCount = array.length - count;
  if (dropRightArray.length === array.length) {
    return array;
  }
  for (var i = 0; i < dropRightCount; i++) {
    dropRightArray.push(array[i]);
  }
  return dropRightArray;
}
