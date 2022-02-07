/* exported tail */
/*
A function that returns all elements in the array except the first one.
input: tail(array): [1,2,3,4]
output: [2,3,4]
-Make a new storage for the list
-go through each element of the list
-if it is the first element.  Do not put it on the new list
-put all other elements on the new list
-give back the new list
*/
function tail(array) {
  var newTail = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newTail.push(array[i]);
    }
  }
  return newTail;
}
