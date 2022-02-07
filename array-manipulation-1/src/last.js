/* exported last */
/*
Use a function to get the last item in a list
input: itemList(array) [1,2,3,4]
output: 4
-get to the end of the list.  Then go back one to see the last item of it
-give back that item
*/
function last(array) {
  var lastItem = array.length - 1;
  return array[lastItem];
}
