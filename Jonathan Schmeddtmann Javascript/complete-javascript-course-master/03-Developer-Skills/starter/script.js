// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -1, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max);
//   console.log(min);

//   return max - min;
// };
// const amplitude = calcTempAplitude(temperatures);
// console.log(amplitude);

// // Merge 2 arrays

// const calcTempAplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max);
//   console.log(min);

//   return max - min;
// };
// const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // value: Number(prompt("Degrees celsius:")),,
    value: 10,
  };

  // console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);

  return max - min;
};
const amplitudeBug = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

// const printForecast = function (arr) {
//   console.log(
//     `... ${arr[0]}C in 1 days ... ${arr[1]}C in 2 days ... ${arr[2]}C in 3 days`
//   );
// };

// printForecast([17, 21, 23]);
// // Hogyan legyen automata?
// // for ciklussal amíg van elem
// // hogyan fűzöm össze az elemeket egy szövegbe (push?)

// const printForecast2 = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     ` ... ${arr[i]} C in ${i + 1} days`;
//   }
// };

// const valami = printForecast2([12, 5, -5, 0, 4]);
// console.log(valami);

// const printForecast2 = function (arr) {
//   return (
//     (arr[0] = ` ... ${arr[0]} C in 1 days`) +
//     (arr[1] = ` ... ${arr[1]} C in 2 days`) +
//     (arr[2] = ` ... ${arr[2]} C in 3 days`) +
//     (arr[3] = ` ... ${arr[3]} C in 4 days`) +
//     (arr[4] = ` ... ${arr[4]} C in 5 days`)
//   );
// };

// const valami = printForecast2([12, 5, -5, 0, 4]);
// console.log(valami);

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast2 = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} C in ${i + 1} days ... `;
//   }
//   console.log("... " + str);
// };

// printForecast2([12, 5, -5, 0, 4]);
