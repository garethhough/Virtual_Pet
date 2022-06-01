// Cat

const { Pet } = require("./pet");

class Cat extends Pet {
  constructor(name) {
    super(name);
  }
  emptyLitter() {
    this.hygiene += 10;
  }
  cardboardBox() {
    this.energy -= 10;
  }
  scratchPost() {
    this.happiness += 10;
  }
}

module.exports = { Cat };
