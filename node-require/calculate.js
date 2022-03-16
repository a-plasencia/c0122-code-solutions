const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argvFunctionCall = process.argv[3];

if (argvFunctionCall === 'plus') {
  add(parseInt(process.argv[2]), parseInt(process.argv[4]));
}

if (argvFunctionCall === 'minus') {
  subtract(parseInt(process.argv[2]), parseInt(process.argv[4]));
}

if (argvFunctionCall === 'times') {
  multiply(parseInt(process.argv[2]), parseInt(process.argv[4]));
}

if (argvFunctionCall === 'over') {
  divide(parseInt(process.argv[2]), parseInt(process.argv[4]));
}
