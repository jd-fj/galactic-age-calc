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