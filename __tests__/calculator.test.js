import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach (() => {
    calculator = new Calculator(30, 80);
  });

  test('should correctly create a Calculator object with earthAge set to 30', () => {
      expect(calculator.earthAge).toEqual(30)
  });

  test('should correctly convert earthAge to mercuryAge', () => {
    calculator.mercury();
    expect(calculator.mercuryAge).toEqual(125);
  });

  test('should correctly convert earthAge to venusAge', () => {
    calculator.venus();
    expect(calculator.venusAge).toEqual(48)
  });

  test('should correctly convert earthAge to marsAge, marsExp, and marsYearsLeft', () => {
    calculator.mars();
    expect(calculator.marsAge).toEqual(16);
    expect(calculator.marsExp).toEqual(43);
    expect(calculator.marsYearsLeft).toEqual(27);
  });

  test('should correctly convert earthAge to jupiterAge, jupiterExp, and jupiterYearsLeft', () => {
    calculator.jupiter();
    expect(calculator.jupiterAge).toEqual(3);
    expect(calculator.jupiterExp).toEqual(7);
    expect(calculator.jupiterYearsLeft).toEqual(3);
  });

  test('should correctly take in user life expectancy', () => {
    expect(calculator.earthExp).toEqual(80);
  });

  test('should correctly calculate number of years a person has left to live', () => {
    calculator.remaining();
    expect(calculator.yearsLeft).toEqual(50);
  });

  test('should correctly calculate earth life expectancy to Mercury life expectancy', () => {
    calculator.mercury();
    expect(calculator.mercuryExp).toEqual(333);
  });

  test('should correctly calculate earth life expectancy to Venus life expectancy', () => {
    calculator.venus();
    expect(calculator.venusExp).toEqual(129);
  });

  // test('should correctly calculate earth life expectancy to Jupiter life expectancy', () => {
  //   calculator.jupiter();
  //   expect(calculator.jupiterExp).toEqual(7);
  // });

  test('should correctly calculate years left to live on Mercury', () => {
    calculator.mercury();
    expect(calculator.mercuryYearsLeft).toEqual(208);
  });

  test('should correctly calculate years left to live on Venus', () => {
    calculator.venus();
    expect(calculator.venusYearsLeft).toEqual(81);
  });

  // test('should correctly calculate years left to live on Jupiter', () => {
  //   calculator.jupiter();
  //   expect(calculator.jupiterYearsLeft).toEqual(4);
  // });

  test('should correctly calculate number of years a person has lived past earth life expectancy', () => {
    calculator.earthAge = 90;
    calculator.remaining();
    expect(calculator.yearsLeft).toEqual(10);
  });
});