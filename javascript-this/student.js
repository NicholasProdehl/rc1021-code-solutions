/* exported student */
var student = {
  firstName: 'Nicholas',
  returnFunc: function () {
    return this.firstName;
  },
  lastName: 'Prodehl',
  lastNameFunc: function () {
    return this.lastName;
  },
  subject: 'JavaScript. ;)',
  subjectFunc: function () {
    return this.subject;
  },
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
