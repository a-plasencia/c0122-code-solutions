var array = [];
array = [
  {
    isbn: '12345',
    title: 'cool book',
    author: 'hopefully by a cool person'
  },
  {
    isbn: '321abc',
    title: 'how to be a book',
    author: 'some say the author is an ACTUAL book'
  },
  {
    isbn: '1716459303',
    title: 'Melee is Broken: Super Smash Bros. Melee: An Interdisciplinary Esports Ethnography',
    author: 'AJ Rappaport'
  }
];
console.log('the value of this array is: ', array);
console.log('logging the type of array here: ', typeof array);
array = JSON.stringify(array);
console.log('logging the array post stringify method: ', array);
console.log('logging the typeof the array post stringify method: ', typeof array);
var student = [];
student = '[{"name":"Alex","Numberid":12345}]';
console.log('the value of student is: ', student);
console.log('the typeof student is: ', typeof student);
student = JSON.parse(student);
console.log('the value of student post parse is: ', student);
console.log('the typeof the student post parse is: ', typeof student);
