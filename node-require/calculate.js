const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[4]);

switch (process.argv[3]) {
  case '+': console.log('Result: ', add(num1, num2));
    break;
  case '-': console.log('Result: ', subtract(num1, num2));
    break;
  case '/': console.log('Result: ', divide(num1, num2));
    break;
  case 'x': console.log('Result: ', multiply(num1, num2));
    break;
  default: console.log('This is an invalid input');
}
