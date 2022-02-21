/* exported student */
var student = {
  firstName: 'Alex',
  lastName: 'Plasencia',
  subject: 'totally javascript =D',
  getFullName: function () {
    var fullName;
    fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var introduction;
    introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName +
    ' and I am studying ' + this.subject + '.';
    return introduction;
  }
};
