/* exported filterOutStrings */
function filterOutStrings(values) {
  var filterStrings = [];
  for (var i = 0; i < values.length; i++) {
    var type = typeof values[i];
    if (type !== 'string') {
      filterStrings.push(values[i]);
    }
  }
  return filterStrings;
}

/*
Practicing pseudo code post lecture woooo
 Make a function to filter out strings in an array and
only leave the values
input will be an array of strings and numbers.
outputs just the numbers in an array.
-create storage for an array
-look at each part of the array one at a time
-if it is not a string, put the value in the list.
-return the new list.
*/
