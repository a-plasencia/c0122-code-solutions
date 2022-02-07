/* exported initial */
/*
Make a function containing all the items in a new list except the last one
input: initial(array): [1,2,3,4]
output: [1,2,3]
-make a new list to put all the items except the last one in
-make a number to indicate where the last item in the list is
-go through the list one by one
-if the item is not the last one in the list, put it in the new list
-give back the new list
*/
function initial(array) {
  var noLastItem = [];
  var lastItem = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    if (i !== lastItem) {
      noLastItem.push(array[i]);
    }
  }
  return noLastItem;
}
