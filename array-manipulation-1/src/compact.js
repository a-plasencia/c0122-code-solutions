/* exported compact */
/*
create a list and remove falsy values
input: compact(array) ['', 1,2,0]
output: [1,2]
-Create a new list to store truthy values
-Go through each piece of the list
-Check if the list is truthy, if it is then put it in the new list
-Give back the new list
*/

function compact(array) {
  var truthyList = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyList.push(array[i]);
    }
  }
  return truthyList;
}
