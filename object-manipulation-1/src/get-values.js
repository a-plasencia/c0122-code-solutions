/* exported getValues */
/*
Use a function to get the values found on the key property
input: object {name: alex, age: 26, hair: black};
output: values in object via array [alex, 26, black];
-create an empty list to store the values
-go through each of the values in the object
-put each value into the list
-give back the list
*/

function getValues(object) {
  var arrayOfValues = [];
  for (var key in object) {
    arrayOfValues.push(object[key]);
  }
  return arrayOfValues;
}
