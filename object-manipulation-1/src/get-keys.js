/* exported getKeys */
/*
input: object {name: alex, age: 26, hair: black}
output: array[name, age, hair];
-make a storage list for the object
-loop through the object
-put the keys into the list
-give back the list
*/
function getKeys(object) {
  var arrayOfKeys = [];
  for (var key in object) {
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}
