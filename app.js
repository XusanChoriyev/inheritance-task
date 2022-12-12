"use strict";
class Builder {
  constructor(value) {
    this.value = value;
  }
  plus(...n) {
    if (typeof this.value === "number") {
      this.value = [...n].reduce((x, y) => x + y, 0) + this.value;
      return this;
    } else {
      this.value = this.value + [...n].reduce((x, y) => x + y, "");
      return this;
    }
  }
  minus(...n) {
    if (typeof this.value === "number") {
      this.value = this.value - [...n].reduce((x, y) => x + y, 0);
      return this;
    } else {
      let num = this.value.length - n * 1;
      this.value = this.value.substr(0, num);
      return this;
    }
  }
  multiply(n) {
    if (typeof this.value === "number") {
      this.value = this.value * n;
      return this;
    } else {
      return this.value;
    }
  }
  divide(n) {
    if (typeof this.value === "number") {
      this.value = this.value / n;
      return this;
    } else {
      let s = Math.floor(this.value.length / n);
      this.value = this.value.substr(0, s * 1);
      return this;
    }
  }
  mod(n) {
    if (typeof this.value === "number") {
      this.value = this.value % n;
      return this;
    }
  }
  get() {
    if (typeof this.value === "number") {
      return this;
    } else {
      return "not a number";
    }
  }
}

//IntBuilder with ES6 features
class IntBuilder extends Builder {
  constructor(num) {
    if (typeof num !== "number") {
      num = 0;
      super(num);
    } else {
      super(num);
    }
  }
}

let intBuilder = new IntBuilder(20);
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();

//Str Builder ES5 features
function StringBuilder(value) {
  this.value = value;
  if (typeof value !== "string") {
    value = "";
    return Object.assign(this, new Builder(value));
  } else {
    return Object.assign(this, new Builder(value));
  }
}
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;
let StrBuilder = new StringBuilder("Worldwide");
StrBuilder
  .plus(" web", "!")
  .minus(4)
  .multiply(3)
  

  
  
  
