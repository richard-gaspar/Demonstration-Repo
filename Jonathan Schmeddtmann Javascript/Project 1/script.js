/*const country = "Hungary";
const continent = "Europe";
let population = "10 million";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = "hungarian";

console.log(isIsland);
console.log(language);

console.log(population / 2);
console.log(population > 6000000);
console.log(population < 6000000);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;


console.log(description);

*/

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let country = "Hungary";
let continent = "Europe";
let population = "10 millions";

console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "schmedtmann";
console.log(lastName);
*/

// Math operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x * 4 =100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(avarageAge);
*/

/*let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const markBMI = 78 / 1.69 ** 2;
const johnBMI = 92 / 1.95 ** 2;

console.log(markBMI, johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

let markHigherBMI = massMark / heightMark ** 2 > massJohn / heightJohn ** 2;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is Higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

markHigherBMI = massMark / heightMark ** 2 > massJohn / heightJohn ** 2;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is Higher than John's (${johnBMI})`);
} else {
  console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})`);
}
*/

/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;

const jonas =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(jonasNew);

console.log(`String with 
multiple
line`);
*/

/*const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 😉");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`${century} century`);
*/

// type conversion

/*const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// type coercion

console.log("I am " + 23 + " years old");
console.log(typeof "I am  + 23 +  years old");
console.log(typeof Number(23));

console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0; ''; undefined; NaN; null

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 11) {
  console.log(`cool! ${favourite} is a Good number`);
} else if (favourite === 7) {
  console.log(`${favourite} is also a cool number`);
} else {
  console.log(`${favourite} is a lame number`);
}

if (favourite !== 11) console.log("Why not 11?");
*/

/*
const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriverLicence && hasGoodVision && isTired);

if ((hasDriverLicence && hasGoodVision) || !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/*
const avarageScoreDolphins = (96 + 108 + 89) / 3;
const avarageScoreKoalas = (88 + 91 + 110) / 3;

console.log(avarageScoreDolphins);
console.log(avarageScoreKoalas);

if (avarageScoreDolphins > avarageScoreKoalas) {
  console.log("Dolphins are the winner of the trophy!");
} else if (avarageScoreDolphins === avarageScoreKoalas) {
  console.log("There is a draw between the two teams!");
} else {
  console.log("Koalas are the winner of the trophy!");
}
*/
/*
const avarageScoreDolphins = (97 + 112 + 80) / 3;
const avarageScoreKoalas = (109 + 95 + 50) / 3;

console.log(avarageScoreDolphins);
console.log(avarageScoreKoalas);

const winnerDolphins = avarageScoreDolphins > avarageScoreKoalas;
const winnerKoalas = avarageScoreDolphins < avarageScoreKoalas;
const draw = avarageScoreDolphins === avarageScoreKoalas;

if (winnerDolphins && avarageScoreDolphins > 100) {
  console.log("Dolphins are the winner of the trophy!");
} else if (winnerKoalas && avarageScoreKoalas > 100) {
  console.log("Koalas are the winner of the trophy!");
} else if (draw && avarageScoreDolphins > 100) {
  console.log("Both win the trophy!");
} else {
  console.log("Neither team wins it!");
} 
*/

/*
const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log(`Plan course structure
Go to coding meetup`);
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day");
} 
*/

/*
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

/*
const bill = 430;

const tip = bill > 300 || bill < 50 ? bill * 0.2 : bill * 0.15;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
*/
