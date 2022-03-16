/* exported invert */
/*
Have an object that inverts the key and property of a source object
input(source object) {foo: 1, bar: 2}
output (invertedObject) {1: foo, 2: bar}
-Create an empty object
-Loop through the source object
-Assign the key to the variable named firstValue
-Assign the property to the variable named secondValue
-Set the second value as the key and the first value as the property in the inverted object
-Return the inverted object
*/

function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];

    invertedObject[secondValue] = firstValue;
  }
  return invertedObject;
}
