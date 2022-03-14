/* exported chunk */
/*
Make a function tht takes an array and returns a subarray based on the size parameter
input (array, size) [a, b, c] 2
output [[a, b][c]]
-Initialize an empty array
-loop through each section of the array, make the increment expression
i = i + size, this is so we increment to the next place after each sub array made
-make a variable to store the slice method of the array object, where we go from
i's position, and i + size, size tells us how much of a chunk of the array we want.
And adding it with i will help us continue through the array in subsequent loops
-push the chunk of the array into the empty array made at the beginning
-after the loop is over return the originally empty but now chunked array
*/

function chunk(array, size) {
  var emptyArray = [];
  for (var i = 0; i < array.length; i = i + size) {
    var chunksOfArray = array.slice(i, i + size);
    emptyArray.push(chunksOfArray);
  }
  return emptyArray;
}
