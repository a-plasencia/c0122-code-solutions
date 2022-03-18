/* exported omit */
/*
Have a function that makes an object that doesn't have the listed keys in the array of keys
-input (source object, keys array) {foo: 1, bar: 2} [foo]
-output (object) {bar: 2}
-Create an empty object literal
-Loop through the source object
-Create a counter and assign it the value of 0
-Assign a variable firstValue to the value of key
-Assign a variable secondValue to the property of the source object
-Loop through the keys array
-Check if the key in the source object is not equal to the items in the array,
if they are not equal increment the counter by 1
-After looping through the keys array, check if the counter variable is equal to
the length of the array.  Then that means that the key was not in the keys array
-So put that key in the omit object, then before looping again reset the counter to 0
-Return the object at the end of the for in loop
*/
function omit(source, keys) {
  var omitObject = {};
  for (var key in source) {
    var counter = 0;
    var firstValue = key;
    var secondValue = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        counter++;
      }
    }
    if (counter === keys.length) {
      omitObject[firstValue] = secondValue;
    }
    counter = 0;
  }
  return omitObject;
}
