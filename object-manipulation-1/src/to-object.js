/* exported toObject */
/*
Make a function that takes the KeyValuePair and returns an object
input keyValuePair [array] = [firstName, Alex];
output object = {firstName : Alex};
*/
function toObject(keyValuePair) {
  var object = {};
  var value = keyValuePair[1];
  object[keyValuePair[0]] = value;
  return object;
}
