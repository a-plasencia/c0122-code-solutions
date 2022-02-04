/* exported findIndex */
function findIndex(array, value) {
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      return index;
    }
  }
  index = -1;
  return index;
}

/*
This function is going through each number, seeing if there is a match.
And then returning the index at where that number lies.  If there is no
match return -1
input [1,3,5,6] with a value 5 that's being looked for
output returning the index at where that number is (3 in this example)
-create a storage for the index that you wish to give back at the end
-go through each part of the array
-check if any of the contents in the array match the value
-if it matches it, make your index equal to that point in the array and give
back the index
-if nothing in the list and the value match, give back the index as -1
*/
