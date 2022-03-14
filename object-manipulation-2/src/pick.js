/* exported pick */
/*
Have a function where you take an object, see if the key is listed in the array of keys.
If the key is listed in the array.  Put it in the new object.
input (object, array) {foo: 1, bar: 2 } [foo, bar]
output (object) {foo: 1}
*/

function pick(source, keys) {
  var pickSource = {};
  var pickBool = false;
  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        pickBool = true;

      }
    }
    if (pickBool === true && secondValue !== undefined) {
      pickSource[firstValue] = secondValue;
      pickBool = false;
    }
  }

  return pickSource;
}
