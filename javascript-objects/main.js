var student = {
  firstName: 'Alex',
  lastName: 'Plasencia',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Dishwasher';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Solara',
  year: '2002'
};

vehicle['isConvertible'] = true;
vehicle['color'] = 'red';
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'kief',
  type: 'cat'
};
delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
