/* exported defaults */
/*
Default assigns the properties of source into the object of target.  All source properties are assigned unless
target already has one defined.
input two objects (target, source) target = {} source = {foo: 1, bar: 2}
output one modified object (target) target = {foo: 1, bar: 2}
-Loop through the source object, since it is the object that is possibly being copied from
-Create a firstValue variable and a secondValue variable to represent the key and property for each loop
in the source object
-Check to see if property in your target object is undefined.  And if it is
push the first and second value into the object
*/

function defaults(target, source) {

  for (var key in source) {
    var firstValue = key;
    var secondValue = source[key];
    if (target[key] === undefined) {
      target[firstValue] = secondValue;
    }
  }
}
