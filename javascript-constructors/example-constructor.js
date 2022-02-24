function ExampleConstructor() {

}

var example = new ExampleConstructor();

console.log('typeof example: ', typeof example);
console.log('value of example: ', example);

console.log('typeof of example.__proto__ is: ', typeof example.__proto__);
console.log('value of example.__proto__ is: ', example.__proto__);

console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructor', ExampleConstructor.prototype);

console.log(example instanceof ExampleConstructor);
