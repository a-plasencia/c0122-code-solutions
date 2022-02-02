/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var index = 0;
  var initials = person.firstName.charAt(index) + person.lastName.charAt(index);
  return initials;
}
