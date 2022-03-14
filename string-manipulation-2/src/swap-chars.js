/* exported swapChars */
/*
-Make a variable to hold string so we don't modify it.
-Split the string and make it into an array.
-Make a variable to hold the information in the first index of our array
-Make a variable to hold the information in the second index of our array
-Call the splice method for the array with three arguments, the first index to indicate
where to go, the value of 1 to remove that element, and replace it with the
character you want to switch.
-Call the splice method and do the same for the other index.
-Use the join method of the array to recreate the string.
-Give back the string
*/
function swapChars(firstIndex, secondIndex, string) {
  var stringFunction = string;
  stringFunction = stringFunction.split('');
  var firstCharSwitch = stringFunction[firstIndex];
  var secondCharSwitch = stringFunction[secondIndex];
  stringFunction.splice(firstIndex, 1, secondCharSwitch);
  stringFunction.splice(secondIndex, 1, firstCharSwitch);
  stringFunction = stringFunction.join('');
  return stringFunction;
}
