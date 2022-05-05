/* exported flatten */

/*
Write a function that "flattens" an array by one level
input (array) [["foo", "bar"], ["baz", "qux"]]
output (array) ["foo", "bar", "baz", "qux"]
- Assign a new empty array
- Loop through the given array
- Check if there is an array in the array you are looping through
- If it's true loop through the array of an array that is found
- Push the contents of the array of an array into the created array
- If there is no array in the array, push it in the created array
- Return the created array
*/

function flatten(array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
