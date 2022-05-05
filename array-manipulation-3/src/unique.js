/* exported unique */

/*
Create a function that only keeps the unique values of an array
input (array) [1, 2, 2, 3]
output (array) [1, 2, 3]
- Create an empty array
- Loop through the given array
- Use the indexOf method to see if the element in the array exists in the empty array
- If it doesn't exist yet, push the value onto the uniqueArray array
- Return the unique array
*/

function unique(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
