#!/usr/bin/env node
/*
Calculator module

Supported operations:
+  addition
-  subtraction
*  multiplication (also supports 'x' and '×')
/  division (also supports '÷')
%  modulo
^, **, pow  exponentiation (power)
sqrt  square root (unary)

Exports:
- add(a, b)
- sub(a, b)
- mul(a, b)
- div(a, b)  (throws on division by zero)
- modulo(a, b) (throws on modulo by zero)
- power(base, exponent)
- squareRoot(n) (throws on negative input)
- calculate(a, op, b)  (accepts operator symbols; supports unary sqrt)
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function calculate(a, op, b) {
  // support unary sqrt in either position: calculate(9, 'sqrt') or calculate('sqrt', 9)
  if (op === 'sqrt') {
    const value = (typeof b === 'number') ? b : a;
    return squareRoot(value);
  }

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
    case '%':
      return modulo(a, b);
    case '^':
    case '**':
    case 'pow':
      return power(a, b);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot, calculate }; 
