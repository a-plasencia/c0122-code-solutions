/* exported difference */

/*
Take an array that only returns unique values between two arrays
input (array, array) [1, 2,], [2, 3]
output (array) [1,3]
- Create an empty array that will hold the unique values
- Loop through the first array
- Initialize a count variable with 0
- Loop through the second array
- IF the element in the first array is found in the second array, increment the count
- If the count is not 1 (indicating that it's unique) then push the element in the first array
into the created array
- Reset the count to 0 in case a duplicate was found
-Loop through the second array
-Repeat this process again, but this time in the second array.  So you can get
any unique values in the second array
- Return the created array with all the unique values
*/

function difference(first, second) {
  const differencesArray = [];
  for (let i = 0; i < first.length; i++) {
    let count = 0;
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        count++;
      }
    }
    if (count !== 1) {
      differencesArray.push(first[i]);
    }
    count = 0;
  }

  for (let k = 0; k < second.length; k++) {
    let count = 0;
    for (let l = 0; l < first.length; l++) {
      if (second[k] === first[l]) {
        count++;
      }
    }
    if (count !== 1) {
      differencesArray.push(second[k]);
    }
    count = 0;
  }

  return differencesArray;
}
