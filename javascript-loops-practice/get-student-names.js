/* exported getStudentNames */
function getStudentNames(students) {
  var studentArray = [];
  for (var i = 0; i < students.length; i++) {
    //    studentArray.push(students[i[name]]);
    var student = students[i];
    // eslint-disable-next-line dot-notation
    studentArray.push(student.name);
    // eslint-disable-next-line dot-notation
  //    console.log('students[i]', student['name']);
  }
  return studentArray;
}
/*
function to retrieve the names of students
input: students(object), the object has a name property
that has their in the value
student[{name: 'name1', name: 'name2'}]
output: an array with the value of the name property in the object.
['name1', name2, namen etc]
-create storage for list of names
-look at each of the objects and there properties one at a time.
-puts the value of the name into the object
-returns the new list of names
*/
