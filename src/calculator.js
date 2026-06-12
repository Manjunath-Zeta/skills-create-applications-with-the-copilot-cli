#!/usr/bin/env node
/*
Calculator module

Supported operations:
+  addition
-  subtraction
*  multiplication (also supports 'x' and '×')
/  division (also supports '÷')

Exports:
- add(a, b)
- sub(a, b)
- mul(a, b)
- div(a, b)  (throws on division by zero)
- calculate(a, op, b)  (accepts operator symbols)
*/

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function calculate(a, op, b) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return sub(a, b);
    case '*':
    case 'x':
    case 'X':
    case '×':
      return mul(a, b);
    case '/':
    case '÷':
      return div(a, b);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
}

module.exports = { add, sub, mul, div, calculate };