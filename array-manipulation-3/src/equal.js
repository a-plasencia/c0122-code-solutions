/* exported equal */
/*
create a function that checks if two arrays are equal
input (array, array)
output (boolean)
-Assign a boolean to true
-Check if the length of the first and second array are the same, if they aren't return false
-Loop through the first array, and check if the contents of the arrays in each position are the same
-If they are not the same assign the boolean false
-After the loop return the boolean
*/

function equal(first, second) {
  let boolean = true;
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      boolean = false;
    }
  }
  return boolean;
}
