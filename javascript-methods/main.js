var num1 = 10;
var num2 = 3;
var num3 = 7;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);
var heroes = [
  'batman',
  'superman',
  'spiderman',
  'hulk'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'book1',
    author: 'cooldude'
  },
  {
    title: 'book2',
    author: 'scarydude'
  },
  {
    title: 'book3',
    author: 'okaydude'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Alex' + ' ' + 'Plasencia';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
