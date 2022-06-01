class Pet {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.hunger = 50;
    this.energy = 50;
    this.happiness = 50;
    this.hygiene = 50;
    // add alive couldnt get bool to work
    this.alive = true;
  }
  status() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
      energy: this.energy,
      happiness: this.happiness,
      hygiene: this.hygiene,
    });
  }

  stats() {
    let methodArray = [
      this.health,
      this.hunger,
      this.energy,
      this.happiness,
      this.hygiene,
    ];
    // console.log(methodArray);
    return methodArray;
  }

  feed() {
    this.hunger += 10;
    this.hygiene -= 10;
  }

  sleep() {
    this.energy += 10;
    this.hunger - 10;
  }

  play() {
    this.energy -= 10;
    this.hunger -= 10;
    this.happiness += 10;
  }

  vet() {
    this.health += 10;
    this.happiness -= 10;
  }

  bath() {
    this.hygiene += 10;
    this.happiness -= 10;
  }

// // TRACY! 
//   // // getter
//   get aliveStatus(){
//     return this.alive;
//   }
//   // setter
//   set aliveStatus(aBool){
//     this.alive = aBool
//   }

  //   GETTERS
  getAlive() {
    return this.alive;
  }
  // SETTER
  setAlive() {
    this.alive = false;
  }

}


module.exports = { Pet };
