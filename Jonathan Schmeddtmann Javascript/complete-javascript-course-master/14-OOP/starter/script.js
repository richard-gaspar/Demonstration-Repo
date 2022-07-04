'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance proterties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} us created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jay instanceof Person);
console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there ');
  console.log(this);
};

Person.hey();

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Spaiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(Person.constructor);
console.log(jonas.constructor);

console.log(jonas.__proto__);
// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 7, 8, 11, 7, 3, 3, 6, 1, 22]; //  new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

class Cars {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelarate = function () {
    console.log(this.brand, 'going at', this.speed + 10, 'km/h');
    this.speed += 10;
  };
  brake = function () {
    console.log(this.brand, 'going at', this.speed - 5, 'km/h');
    this.speed -= 5;
  };
}

const carOne = new Cars('BMW', 120);
const carTwo = new Cars('Mercedes', 95);

console.log(Cars.prototype);

carOne.accelarate();
carOne.accelarate();
carOne.brake();
carOne.brake();
carTwo.accelarate();
carTwo.accelarate();

//class expression
// const PersonCl = class {}

// class declatration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there ');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`hello ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

class Cars {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelarate() {
    console.log(this.brand, 'going at', this.speed + 10, 'km/h');
    this.speed += 10;
  }
  brake() {
    console.log(this.brand, 'going at', this.speed - 5, 'km/h');
    this.speed -= 5;
  }

  get speedUS() {
    // return console.log(`${this.brand} is going at ${this.speed / 1.6} mi/h`);
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const carOne = new Cars('BMW', 120);
const carTwo = new Cars('Mercedes', 95);
const carThree = new Cars('Ford', 120);

console.log(Cars.prototype);

carOne.accelarate();
carOne.accelarate();
carOne.brake();
carOne.brake();
carTwo.accelarate();
carTwo.accelarate();
console.log(carThree.speedUS);
carThree.accelarate();
carThree.accelarate();
carThree.accelarate();
carThree.speedUS = 50;
console.log(carThree);


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer science');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


const Cars = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Cars.prototype.accelarate = function () {
  console.log(
    `${this.brand} going at ${this.speed + 20} km/h with a charge of ${
      this.charge - 1
    }`
  );
  this.speed += 20;
  this.charge -= 1;
};

Cars.prototype.brake = function () {
  console.log(
    `${this.brand} going at ${this.speed - 30} km/h with a charge of ${
      this.charge - 1
    }`
  );
  this.speed -= 30;
  this.charge -= 1;
};

const EV = function (brand, speed, charge) {
  Cars.call(this, brand, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Cars.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelarate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelarate();
tesla.accelarate();
tesla.accelarate();
tesla.accelarate();
tesla.accelarate();
console.log(tesla);
console.log(tesla);


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    // console.log('Hey there ');
    // console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();


// 1, Public fields
// 2, Private fields
// 3, Public methods
// 4, Private methods
// (there is also the static version)

class Account {
  // 1, Public fields (instances)
  locale = navigator.language;

  // 2, Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`THanks for omening an account, ${this.owner}`);
  }

  // 3, Public methods
  // Public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  // 4, Private methods
  // #approveLoan
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);
Account.helper();

// console.log(#movements);
// console.log(acc1.#pin);

// chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
*/

class CarsCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelarate() {
    console.log(this.brand, 'going at', this.speed + 10, 'km/h');
    this.speed += 10;
  }

  brake() {
    console.log(this.brand, 'going at', this.speed - 5, 'km/h');
    this.speed -= 5;
    return this;
  }
}

class EVCl extends CarsCl {
  #charge;
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }

  accelarate() {
    console.log(
      `${this.brand} going at ${this.speed + 20} km/h with a charge of ${
        this.#charge - 1
      }`
    );
    this.speed += 20;
    this.#charge -= 1;
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);

Rivian.accelarate();
Rivian.accelarate();
Rivian.accelarate();
Rivian.brake();
Rivian.brake();
Rivian.chargeBattery(50);
console.log(Rivian);
// console.log(#charge);
Rivian.accelarate().accelarate().brake().chargeBattery(75);
console.log(Rivian);
