// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(Arr) {
  return `${Arr[Arr.length - 1]}, ${Arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];
  for (let num of arr) if (num >= highest) highest = num;
  return highest;
}

function highestCount(array) {
  let highNum = highestNumber(array);
  let highNumCount = 0;
  for (let num of array) if (num === highNum) highNumCount += 1;
  return highNumCount;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
