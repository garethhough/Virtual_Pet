const { Pet } = require("./pet");

class Dog extends Pet {
  constructor(name) {
      super(name)
  }

  walks(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.energy -= 10;
      console.log(",-.___,-.")
      console.log(`\_/_ _\_/`)
      console.log("  )O_O(")
      console.log(" { (_) }")
      console.log("  `-^-' ")
  }

  playTug(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.energy -= 10;
      console.log(`${} Loves playing tug!`);
  }

  playFetch(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.energy -= 10;
  }
}

module.exports = { Dog };

