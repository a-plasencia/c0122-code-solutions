/* exported reverse */
/*
Make a function that reverses the list given
input: reverse(array) [1,2,3]
output: [3,2,1]
-Make a storage for the new list
-Make a storage that stores where the end of the list is
-increment backwards through the list
-put each word from the end of the list into the start of the new list
-give back the list in reverse
*/
function reverse(array) {
  var reverseList = [];
  var endOfList = array.length - 1;
  for (var i = 0; i !== array.length; array.length--) {
    endOfList = array.length - 1;
    reverseList.push(array[endOfList]);
  }
  return reverseList;
}
