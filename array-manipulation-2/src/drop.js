/* exported drop */
/*
Make a function that takes the end of the array starting from count.
input(array, count) ['foo', 'bar', 'baz', 'qux'] 2
output (array) ['baz', 'qux']
-Make a new variable and initalize an empty array named dropArray
-if dropArray's length property is strictly equal to array's length property
return dropArray
-Make a for loop where the starting position is count and its condition is count < array.length; increment count
-in each loop push the arrays count position into dropArray
-give back the dropArray array
*/

function drop(array, count) {
  var dropArray = [];
  if (dropArray.length === array.length) {
    return dropArray;
  }
  for (count; count < array.length; count++) {
    dropArray.push(array[count]);
  }
  return dropArray;
}
