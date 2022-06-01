// Import third party modules
const inquirer = require("inquirer");

// Import local modules
// pets class sub class cat dog dragon
// const { Pet } = require("./pet");
const { Cat } = require("./cat");
const { Dog } = require("./dog");
const { Dragon } = require("./dragon");

// list used in game
const { activityList } = require("./lists");

// not needed created with new pet(petsname)
// let myPet = "";

try {
  const start = async () => {
    //    1st input - type of pet
    const typeOfPet = await inquirer.prompt({
      type: "list",
      name: "typeOfPetName",
      message:
        "What type of pet would you like? Please choose from the following",
      choices: choiceOfPetsList,
    });

    // name the pet
    const petName = await inquirer.prompt({
      type: "input",
      name: "petName",
      message: "What is your pet called?",
    });
    if (typeOfPet.typeOfPetName === "Cat") {
      myPet = new Cat(petName.petName);
      actionList1 =[]
      actionList1 = actionList.concat(catActionList);
    } else if (typeOfPet.typeOfPetName === "Dog") {
      myPet = new Dog(petName.petName);
      actionList1 =[]
      actionList1 = actionList.concat(dogActionList);
    } else if (typeOfPet.typeOfPetName === "Dragon") {
      myPet = new Dragon(petName.petName);
      actionList1 =[]
      actionList1 = actionList.concat(dragonActionList);
    }
    // console.log(petName.petName);
    // myPet = new Pet(petName.name);
    console.log(`You have named your pet ${myPet.name}`);
    myPet.status();
    // calls the game function
    game();
  };
  // the game function - async and await avdice needed also HOF how do we use it could fix problems later on
  const game = async () => {
    const activity = await inquirer.prompt({
      type: "list",
      name: "whatActivity",
      message: `What do you want to do with ${myPet.name}?`,
      choices: actionList1,
    });

    // Check what activity was chosen.
    // This was JOSH - lets get him to explain switch
    switch (activity.whatActivity) {
      case "feed":
        myPet.feed();
        break;
      case "sleep":
        myPet.sleep();
        break;
      case "play":
        myPet.play();
        break;
      case "vet":
        myPet.vet();
        break;
      case "bath":
        myPet.bath();
        break;
      case "kill":
        myPet.setAlive(false); //
        break;
        // cat
      case "emptyLitter":
        myPet.emptyLitter();
        break;
      case "cardboardBox":
        myPet.cardboardBox();
        break;
      case "scratchPost":
        myPet.scratchPost();
        break;
        // dog
      case "walks":
        myPet.walks();
        break;
      case "playFetch":
        myPet.playFetch();
        break;
      case "playTug":
        myPet.playTug();
        break;
        // dragon
      case "ride":
        myPet.ride();
        break;
      case "explore":
        myPet.explore();
        break;
      case "fight":
        myPet.fight();
        break;
    }

    myPet.status();
    // can we get a list of (key: value) pairs
    // we can change the value with setters setValue(aValue)
    // example if hunger.value > 100 pet is sick
    // example if energy.value > 100 pet is manic and suddenly engery drops to 30
    // the aim is to keep all values greater than 0 and less than 100
    // this all needs to go in a wait or async - still unsure on them
    myList = myPet.stats();
    console.log(myList);
    // 0 health,
    // 1 hunger,
    // 2 energy,
    // 3 happiness,
    // 4 hygiene,
    // list = [0 "Pet died from being unhealthy", 1 "Pet died of starvation",
    // 2 "pet died from exhaustion", 3 "pet died from be sad", 4"pet got matted and died"]
    for (let i = 0; i < myList.length; i++) {
      if (myList[i] === 0) {
        myPet.setAlive(false);
        // deadList[i]
        console.log(`${myPet.name} ${deadList[i]}`);
      } else {
            // list = [0 "Pet was too healthy it moved onto the next life", 1 "Pet died from over eating",
    // 2 "Pet slept so much it went into a deep sleep and died", 3 "Pet was so happy it exploded", 4"Pet drowned in bath]
        if (myList[i] > 100) {
          myPet.setAlive(false);
          console.log(`${myPet.name} ${happyDeadList[i]}`);
        }
      }
    }

    // new game!

    if (myPet.getAlive() === false) {
      console.log("GAMEOVER");
      const newGame = await start();
    } else {
      game();
    }
  };

  start();
} catch (error) {
  console.log("Error!", error);
}
