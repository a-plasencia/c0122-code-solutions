/* exported calculator */
var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var subtract = x - y;
    return subtract;
  },
  multiply: function (x, y) {
    var multiply = x * y;
    return multiply;
  },
  divide: function (x, y) {
    var divide = x / y;
    return divide;
  },
  square: function (x) {
    var squared = x * x;
    return squared;
  },
  sumAll: function (numbers) {
    var sumOfArray = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumOfArray = sumOfArray + numbers[i];
    }
    return sumOfArray;
  },
  getAverage: function (numbers) {
    var sumOfArray = 0;
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumOfArray = sumOfArray + numbers[i];
    }
    average = sumOfArray / numbers.length;
    return average;
  }
};
