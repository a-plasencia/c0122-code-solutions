const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumberFunction(value) {
  if (value % 2 === 0) {
    return true;
  } else { return false; }
}

function numberGreaterFive(value) {
  if (value > 5) {
    return true;
  } else { return false; }
}

const evenNumbers = numbers.filter(evenNumberFunction);
console.log('All the even numbers of the array are:', evenNumbers);

const overFive = numbers.filter(numberGreaterFive);
console.log('All the numbers that are greater then five are:', overFive);

const startsWithE = names.filter(word => word.startsWith('E'));
console.log('All Names that start with E are:', startsWithE);

const haveD = names.filter(name => name.toLowerCase().includes('d'));
console.log('The names that have "D" or "d" are: ', haveD);
