/* exported intersection */

/*
Write a function that returns an array where a value is found in both provided arrays
input(array, array) [1,2] [2,3]
output(array) [2]

-Create an empty array
-Loop through the first array
-Initialize a count with 0
-Loop through the second array
-If the element in the first array matches any of the elements in the second array,
then increment the count by 1
-If the count is one(meaning there are duplicates), push that element to the created
array
-Reset the count to 0 in case a duplicate is found before the loop continues
-Return the created array now with unique values

*/

function intersection(first, second) {
  const intersectArray = [];
  for (let i = 0; i < first.length; i++) {
    let count = 0;
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        count++;
      }
    }
    if (count === 1) {
      intersectArray.push(first[i]);
    }
    count = 0;
  }
  return intersectArray;
}
