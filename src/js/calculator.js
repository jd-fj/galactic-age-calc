export class Calculator {
  constructor(earthAge, earthExp) {
    this.earthAge = earthAge;
    this.earthExp = earthExp;
    this.yearsLeft;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge; 
    this.mercuryExp;
  }
  
  mercury() {
    this.mercuryAge = Math.round(this.earthAge / .24);
    this.mercuryExp = Math.round(this.earthExp /.24);
  }
  venus() {
    this.venusAge = Math.round(this.earthAge / .62);
  }
  mars() {
    this.marsAge = Math.round(this.earthAge / 1.88);
  }
  jupiter() {
    this.jupiterAge= Math.round(this.earthAge / 11.86);
  }
  remaining() {
    this.yearsLeft = (this.earthExp - this.earthAge);
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