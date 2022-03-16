const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argvFunctionCall = process.argv[3];

if (argvFunctionCall === 'plus') {
  console.log('result: ', add(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (argvFunctionCall === 'minus') {
  console.log('result: ', subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (argvFunctionCall === 'times') {
  console.log('result: ', multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
}

if (argvFunctionCall === 'over') {
  console.log('result: ', divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
