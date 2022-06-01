const { Pet } = require("./pet");

class Dog extends Pet {
  constructor(name) {
      super(name)
  }

  walk(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 10;
      this.energy -= 10;
      console.log(`${myPet.name} Loves going on walks! ${myPet.name} is now getting sleepy`);
  }

  playTug(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.energy -= 10;
      console.log(`${myPet.name} Loves playing tug! ${myPet.name} is now getting sleepy`);
  }

  playFetch(){
      this.hunger -= 5;
      this.thirst -= 5;
      this.health += 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.energy -= 10;
      console.log(`${myPet.name} Loves playing fetch! ${myPet.name} is now getting sleepy`);
  }
}

module.exports = { Dog };

