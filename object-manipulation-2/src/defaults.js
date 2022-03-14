/* exported defaults */

function defaults(target, source) {

  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];
    if (target[key] !== source[key]) {
      if (target[key] === undefined) {
        target[firstValue] = secondValue;
      }
    }
  }
}
