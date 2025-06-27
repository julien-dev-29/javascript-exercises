const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (/** @type {Array} */arr) {
  return arr.reduce((total, curr) => total + curr, 0)
};

const multiply = function (arr) {
  return arr.reduce((sum, curr) => sum * curr)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  let sum = 1
  for (let index = 1; index <= num; index++) {
    sum *= index
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
