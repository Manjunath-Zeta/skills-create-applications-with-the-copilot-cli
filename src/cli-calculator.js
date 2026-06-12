#!/usr/bin/env node
/*
Node.js CLI Calculator

Supported operations:
+  addition
-  subtraction
*  multiplication (also supports 'x' and '×')
/  division (also supports '÷')

Usage:
  node src/cli-calculator.js <number1> <operator> <number2>
Examples:
  node src/cli-calculator.js 2 + 3
  node src/cli-calculator.js 10 ÷ 2
*/

function printHelp() {
  console.log('Usage: node src/cli-calculator.js <number1> <operator> <number2>');
  console.log('Operators: +  -  *  /  (also supports ×, x and ÷)');
}

function parseNumber(s) {
  const n = Number(s);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${s}`);
    process.exit(2);
  }
  return n;
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
  printHelp();
  process.exit(0);
}

if (args.length !== 3) {
  console.error('Error: expected exactly 3 arguments.');
  printHelp();
  process.exit(2);
}

let [aRaw, op, bRaw] = args;
const a = parseNumber(aRaw);
const b = parseNumber(bRaw);

let result;
switch (op) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
  case 'x':
  case 'X':
  case '×':
    result = a * b;
    break;
  case '/':
  case '÷':
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(3);
    }
    result = a / b;
    break;
  default:
    console.error(`Unsupported operator: ${op}`);
    printHelp();
    process.exit(2);
}

// Print result (if integer, print as integer; otherwise print as float)
if (Number.isFinite(result) && Number.isInteger(result)) {
  console.log(result);
} else {
  console.log(result);
}
