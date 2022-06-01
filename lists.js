// list ofpets
// list of pet choices
choiceOfPetsList = [
  {
    key: "1",
    name: "1. Cat",
    value: "Cat",
  },
  {
    key: "2",
    name: "2. Dog",
    value: "Dog",
  },
  {
    key: "3",
    name: "3. Dragon",
    value: "Dragon",
  },
];

// actions
actionList = [
  {
    key: "1",
    name: "1: Feed",
    value: "feed",
  },
  {
    key: "2",
    name: "2: Sleep",
    value: "sleep",
  },
  {
    key: "3",
    name: "3: Play",
    value: "play",
  },
  {
    key: "4",
    name: "4: Vet",
    value: "vet",
  },
  {
    key: "5",
    name: "5: Bath",
    value: "bath",
  },
  {
    key: "6",
    name: "6: Kill",
    value: "kill",
  },
];

// list of act action choices
catActionList = [
  {
    key: "a",
    name: "a. EmptyLitter",
    value: "emptyLitter",
  },
  {
    key: "b",
    name: "b. CardboardBox",
    value: "cardboardBox",
  },
  {
    key: "c",
    name: "c. scratchPost",
    value: "scratchPost",
  },
];

// list of act action choices
dogActionList = [
  {
    key: "a",
    name: "a. walk",
    value: "walk",
  },
  {
    key: "b",
    name: "b. playTug",
    value: "playTug",
  },
  {
    key: "c",
    name: "c. playFetch",
    value: "playFetch",
  },
];

// list of act action choices
dragonActionList = [
  {
    key: "a",
    name: "a. fly",
    value: "fly",
  },
  {
    key: "b",
    name: "b. ride",
    value: "ride",
  },
  {
    key: "c",
    name: "c. explore",
    value: "explore",
  },
];

// dead list
deadList = ["Pet died from being unhealthy", "Pet died of starvation",
    "Pet died from exhaustion", "Pet died from being sad", "Pet got matted and died"]

happyDeadList = ["Pet was too healthy it moved onto the next life", "Pet died from over eating", "Pet slept so much it went into a deep sleep and died", "Pet was so happy it exploded", "Pet drowned in bath"]

module.exports = { actionList };

module.exports = { catActionList };

module.exports = { dogActionList };

module.exports = { dragonActionList };

module.exports = { deadList };
module.exports = { happyDeadList };
