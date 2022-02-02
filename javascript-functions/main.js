function convertMinutesToSeconds(minutes) {
  minutes *= 60;
  return minutes;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResults);

function greet(name) {
  name = 'Hey, ' + name;
  return name;
}

var greetResult = greet('Beavis');
console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResults', getLastElementResults);
