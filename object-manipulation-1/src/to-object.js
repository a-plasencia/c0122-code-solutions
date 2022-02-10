/* exported toObject */
/*
Make a function that takes the KeyValuePair and returns an object
input keyValuePair [array] = [firstName, Alex];
output object = {firstName : Alex};
-Create a storage for the object
-Assign a value to the second value in the array
-Call the storage, and put the first piece of the list in the
property, and assign the storage assigned to the second value
in the array
return the storage
*/
function toObject(keyValuePair) {
  var object = {};
  var value = keyValuePair[1];
  object[keyValuePair[0]] = value;
  return object;
}
