/* exported omit */

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
