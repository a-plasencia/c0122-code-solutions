/* exported invert */

function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];

    invertedObject[secondValue] = firstValue;
  }
  return invertedObject;
}
