"Use strict";

const temperatures = [3, -1, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }

  console.log(max);
};
calcTempAplitude([3, 7, 4]);
