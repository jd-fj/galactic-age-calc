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

  test('should correctly convert earthAge to marsAge', () => {
    calculator.mars();
    expect(calculator.marsAge).toEqual(16);
  });

  test('should correctly convert earthAge to jupiterAge', () => {
    calculator.jupiter();
    expect(calculator.jupiterAge).toEqual(3);
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

  test('should correctly calculate earth life expectancy to Mars life expectancy', () => {
    calculator.mars();
    expect(calculator.marsExp).toEqual(43);
  });

  test('should correctly calculate earth life expectancy to Jupiter life expectancy', () => {
    calculator.jupiter();
    expect(calculator.jupiterExp).toEqual(8);
  });
});

// import Pizza from './../src/js/business.js';

// describe('Pizza', () => {
//   let reusablePizza;

//   beforeEach(() => {
//     reusablePizza = new Pizza("large", ["pepperoni", "cheese"]);
//   });
  
//   test('should correctly create a pizza object with size large and pepperoni and cheese toppings', () => {
//     expect(reusablePizza.size).toEqual("large");
//     expect(reusablePizza.topping).toEqual(["pepperoni", "cheese"])
//   });
// });

// export default function Pizza(size, topping) {
//   this.size = size;
//   this.topping = topping;
// }

// Pizza.prototype.checkZa = function() {
//   if (this.size == 1) {
//     return "your " + this.topping + " 'za is a small!";
//   } else if (this.size == 2) {
//     return "your " + this.topping + " 'za is a medium!";
//   } else {
//     return "your " + this.topping + " 'za is a large!  Party time!";
//   }
// }