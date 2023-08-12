class Polygon {
  constructor(array) {
    this.array = array;
  }
  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    return this.array.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  constructor(array) {
    super(array);
    this.side1 = this.array[0];
    this.side2 = this.array[1];
    this.side3 = this.array[2];
  }
  get isValid() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side3 + this.side1 > this.side2
    );
  }
}

class Square extends Polygon {
  constructor(array) {
    super(array);
    this.side1 = this.array[0];
    this.side2 = this.array[1];
    this.side3 = this.array[2];
    this.side4 = this.array[3];
  }
  get isValid() {
    return (
      this.side1 == this.side2 &&
      this.side2 == this.side3 &&
      this.side3 == this.side4
    );
  }
  get area() {
    return this.array[0] * this.array[1];
  }
}

const newTriangle = new Triangle([5, 5, 5]);
console.log(newTriangle.isValid);
