const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubledMap = numbers.map(x => x * 2);

console.log('The value of doubledMap is: ', doubledMap);

const prices = numbers.map(x => `$${x}.00`);
console.log('Value of prices is: ', prices);

const upperCased = languages.map(x => x.toUpperCase());
console.log('Value of uppercased is: ', upperCased);

const firstLetters = languages.map(x => x.charAt(0));

console.log('The first letter in each element is: ', firstLetters);
