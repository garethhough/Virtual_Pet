const { Pet } = require("./pet");

class Dragon extends Pet {
  constructor(name) {
    super(name);
  }
  ride() {
    this.happiness += 10;
    this.energy -= 10;
    this.hygiene -= 10;
  }

  explore() {
    this.happiness += 10;
    this.hygiene -= 10;
    this.energy -= 10;
  }
  fight() {
    this.health -= 20;
    this.energy -= 10;
    this.hunger -= 10;
    this.happiness -= 10;
    this.thirst -= 10;
    this.hygiene -= 10;
 }
}

module.exports = { Dragon };

