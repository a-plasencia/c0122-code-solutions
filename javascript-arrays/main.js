var color;
color = ['red', 'white', 'blue'];
console.log('value of color[0]: ', color[0]);
console.log('value of color[1]: ', color[1]);
console.log('value of color[2]: ', color[2]);
console.log('America is ' + color[0] + ', ' + color[1] + ', and ' + color[2]);

color[2] = 'green';
console.log('Mexico is ' + color[0] + ', ' + color[1] + ', and ' + color[2]);
console.log('value of colors: ', color);

var students;
students = ['alex', 'christian', 'adrian', 'anthony'];
var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('value of students: ', students);
