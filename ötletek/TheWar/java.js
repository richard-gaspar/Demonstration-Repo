"use strict";

class Unit {
  constructor() {}

  sufferDamage(hit) {
    const armorHit = Math.round((hit - hit * this.armor) * 100) / 100;
    console.log(armorHit);
    const realHit = armorHit - (armorHit * Math.round(Math.random() * 3)) / 10;
    this.health = this.health - realHit;
    // console.log(Math.round(realHit * 100) / 100);
    return realHit;
  }
}

class HorseTrooper extends Unit {
  constructor() {
    super();
    this.health = 60;
    this.hitpoint = 20;
    this.armor = 0.3;
  }
}

class Swordsman extends Unit {
  constructor() {
    super();
    this.health = 40;
    this.hitpoint = 15;
    this.armor = 0.2;
  }
}

// const trooper = new HorseTrooper();
// const swordsman = new Swordsman();

class Army {
  constructor(members) {
    this.members = [];
  }

  // addSwordsman(number) {
  //   for (let i = 0; i < number; i++) {
  //     this.members.push(swordsman);
  //   }
  // }

  // addTrooper(number) {
  //   for (let i = 0; i < number; i++) {
  //     this.members.push(trooper);
  //   }
  // }

  addUnit(object) {
    for (let i = 0; i < object.horse; i++) {
      this.members.push(new HorseTrooper());
    }

    for (let i = 0; i < object.sword; i++) {
      this.members.push(new Swordsman());
    }
  }

  shuffleArmy() {
    shuffleArray(this.members);
  }
}

class SimulateFight {
  constructor(army1, army2) {
    this.army1 = this.addUnits(army1);
    this.army2 = this.addUnits(army2);
  }

  addUnits(object) {
    const members = [];
    for (let i = 0; i < object.horse; i++) {
      members.push(new HorseTrooper());
    }

    for (let i = 0; i < object.sword; i++) {
      members.push(new Swordsman());
    }
    return members;
  }
}

const csapat = new SimulateFight(
  { horse: 3, sword: 2 },
  { horse: 3, sword: 2 }
);

const army1 = new Army();
const army2 = new Army();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

army1.addUnit({ horse: 2, sword: 2 });
army2.addUnit({ horse: 2, sword: 2 });

const fight = function (unit1, unit2) {
  unit2.sufferDamage(unit1.hitpoint);
  unit1.sufferDamage(unit2.hitpoint);
  if (unit2.health > 0 && unit1.health > 0) {
    return fight(unit1, unit2);
  } else {
    const deceasedFromFight = [];
    if (unit1.health <= 0) {
      deceasedFromFight.push(unit1);
    }
    if (unit2.health <= 0) {
      deceasedFromFight.push(unit2);
    }
    // unit1.health <= 0 ? deceasedFromFight.push(unit1) : null;
    // unit2.health <= 0 ? deceasedFromFight.push(unit2) : null;
    return deceasedFromFight;
  }
};

const war = function () {
  // console.log(army1.members);
  // console.log("------------------------------------------");
  // console.log(army2.members);
  console.log(" CSATA KEZDDIK");

  // The first members of each array should fight until one has no health

  while (army1.members.length > 0 && army2.members.length > 0) {
    const smallestGroupLength =
      army1.members.length > army2.members.length
        ? army2.members.length
        : army1.members.length;
    let losers = [];
    army1.shuffleArmy();
    army2.shuffleArmy();
    console.log(JSON.stringify(army1.members));
    console.log(JSON.stringify(army2.members));
    for (let i = 0; i < smallestGroupLength; i++) {
      const choosenOnes = [army1.members[i], army2.members[i]];
      shuffleArray(choosenOnes);
      const user = fight(choosenOnes[0], choosenOnes[1]);
      losers = losers.concat(user);
      // console.log(losers);
      // console.log(JSON.stringify(army1.members));
      // console.log("------------------------------------------");
      // console.log(JSON.stringify(army2.members));
      console.log("------------------ENd Round-----------------------");
    }
    losers.forEach((loser) => {
      const index =
        army1.members.indexOf(loser) > -1
          ? army1.members.indexOf(loser)
          : army2.members.indexOf(loser);

      army1.members.includes(loser)
        ? army1.members.splice(index, 1)
        : army2.members.splice(index, 1);
    });
  }
  console.log("-------------------END-------------------");
  console.log(army1.members);
  console.log("------------------------------------------");
  console.log(army2.members);
  // while (
  //   army1.members.length > 0 &&
  //   army1.members[0].health > 0 &&
  //   army2.members.length > 0 &&
  //   army2.members[0].health > 0
  // ) {
  //   army1.members[0].sufferDamage(army2.members[0].hitpoint);
  //   if (army1.members[0].health > 0) {
  //     army2.members[0].sufferDamage(army1.members[0].hitpoint);
  //     if (army2.members[0].health <= 0) {
  //       army2.members.shift();
  //     }
  //   } else army1.members.shift();
  //   console.log("------------------------------------------");
  //   console.log(JSON.stringify(army1.members));
  //   console.log(JSON.stringify(army2.members));
  //   console.log("------------------------------------------");
  // }
};

war();

// const winner = fight(army1.members[0], army2.members[0]);

// console.log("----------------after fight----------------");
// // console.log(army1.members);
// // console.log("----------------------------------------");
// // console.log(army2.members);

// console.log(winner);
