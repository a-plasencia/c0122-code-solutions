/* exported pick */
function pick(source, keys) {
  var pickSource = {};
  for (var key in source) {
    // console.log('value of key is: ', key);

    for (var i = 0; i < keys.length; i++) {

      if (key === keys[i]) {
        var value = source[key];
        // console.log('value of value is: ', value);
        pickSource[key] = value;
        // console.log('value of ' + key + ' and value of keys[i] is: ' + keys[i]);
      }
    }
  }
  return pickSource;
}
