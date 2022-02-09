/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

/*
goal: go through a list of items and check to see if any are strictly
equal to 7
input: array [1,2,3,7,'7/']
output: true or false
-go through the list one by one
-compare and check if any of the items on the list are 7
-return true or false depending on the list that's sent
*/
