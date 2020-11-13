export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge;
  }
  
  mercury() {
    this.mercuryAge = Math.round(this.earthAge / .24);
  }
}

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