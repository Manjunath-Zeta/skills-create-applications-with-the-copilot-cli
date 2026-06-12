const calc = require('../calculator');

describe('Calculator basic operations', () => {
  test('2 + 3 => 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('45 * 2 => 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('20 / 5 => 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow(/division by zero/i);
  });

  test('calculate helper with symbol +', () => {
    expect(calc.calculate(2, '+', 3)).toBe(5);
  });

  test('calculate helper with symbol ÷', () => {
    expect(calc.calculate(10, '÷', 2)).toBe(5);
  });

  test('calculate throws for unsupported operator', () => {
    expect(() => calc.calculate(1, '%', 2)).toThrow(/unsupported operator/i);
  });
});
