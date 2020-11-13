import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach (() => {
    calculator = new Calculator(30);
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
    expect(calculator.jupiterAge).toEqual(2)
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