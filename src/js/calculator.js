export class Calculator {
  constructor(earthAge, earthExp) {
    this.earthAge = earthAge;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge; 
    
    this.earthExp = earthExp;
    this.mercuryExp;
    this.venusExp;
    this.marsExp;
    this.jupiterExp;
    
    this.yearsLeft;
    this.mercuryYearsLeft;
    this.venusYearsLeft;
    this.marsYearsLeft;
  }
  
  mercury() {
    this.mercuryAge = Math.round(this.earthAge / .24);
    this.mercuryExp = Math.round(this.earthExp /.24);
    this.mercuryYearsLeft = (this.mercuryExp - this.mercuryAge);
  }
  venus() {
    this.venusAge = Math.round(this.earthAge / .62);
    this.venusExp = Math.round(this.earthExp /.62);
    this.venusYearsLeft = (this.venusExp - this.venusAge);
  }
  mars() {
    this.marsAge = Math.round(this.earthAge / 1.88);
    this.marsExp = Math.round(this.earthExp /1.88);
    this.marsYearsLeft = (this.marsExp - this.marsAge);
  }
  jupiter() {
    this.jupiterAge= Math.round(this.earthAge / 11.86);
    this.jupiterExp = Math.round(this.earthExp / 11.86);
    this.jupiterYearsLeft = (this.jupiterExp - this.jupiterAge);
  }
  remaining() {
    if (this.earthAge < this.earthExp) {
      this.yearsLeft = (this.earthExp - this.earthAge);
    } else if (this.earthAge > this.earthExp) {
      this.yearsLeft = (this.earthAge - this.earthExp);
    }
    return this.yearsLeft;
  }

}