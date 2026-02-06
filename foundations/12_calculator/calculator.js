const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrNumb) {
  return arrNumb.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

const multiply = function (arrNumb) {
  return arrNumb.reduce((acc, current) => {
    return acc * current;
  }, 1);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  let factorialSum = 1;
  for (let i = num; i > 0; i--) {
    console.log(i);
    factorialSum *= i;
  }
  return factorialSum;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
