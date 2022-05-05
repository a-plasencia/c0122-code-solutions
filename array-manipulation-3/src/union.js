/* exported union */

/*
Create a function that takes the unique values from the first and second array
input (array, array) [1, 2] [2,3]
output (array) [1,2,3]
-Create an empty array
-Loop through the first array
-Use the indexOf method to see if each element of the first array is in the created array
-If it's not in the created array push that element into it
-Loop through the second array and check for the same thing, excep tthis time the contents
of the first array is there to prevent duplicate values to be pushed into the array
-Return the created array
*/

function union(first, second) {
  const unionArray = [];
  for (let i = 0; i < first.length; i++) {
    if (unionArray.indexOf(first[i]) === -1) {
      unionArray.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (unionArray.indexOf(second[j]) === -1) {
      unionArray.push(second[j]);
    }
  }
  return unionArray;
}
