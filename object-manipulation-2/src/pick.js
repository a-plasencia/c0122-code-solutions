/* exported pick */
/*
Have a function where you take an object, see if the key is listed in the array of keys.
If the key is listed in the array.  Put it in the new object.
input (object, array) {foo: 1, bar: 2 } [foo, bar]
output (object) {foo: 1}
*/

function pick(source, keys) {
  var pickSource = {};
  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        // console.log('the value of First value is: ', firstValue);
        // console.log('the value of the secondValue is: ', secondValue);
        // console.log('the value of keys[i] is: ', keys[i]);
        pickSource[firstValue] = secondValue;
      }
    }
  }
  return pickSource;
}

// function pick(source, keys) {
//   var pickSource = {};
//   for (var i = 0; i < keys.length; i++) {
//     for (var key in source) {
//       var firstValue = key;
//       var secondValue = source[key];
//       if (key === keys[i]) {
//         console.log('the value of firstValue is: ', firstValue);
//         console.log('the value of the secondValue is: ', secondValue);
//         console.log('the value of keys[i] is: ', keys[i]);
//         pickSource[firstValue] = secondValue;
//       }
//     }
//   }
//   return pickSource;
// }
