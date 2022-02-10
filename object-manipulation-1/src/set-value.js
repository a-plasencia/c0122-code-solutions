/* exported setValue */
/*
Make a function that sets a property and value inside of
the object
input: setValue(alex, 'firstName', 'Alexander')
output: {firstName: Alexander}
-Call the object with the property key, then assign it the value
*/

function setValue(object, key, value) {
  object[key] = value;
}
