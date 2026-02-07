const fibonacci = function (positionNumber) {
  if (isNaN(positionNumber) || positionNumber < 0) return "OOPS";
  let fibonacciSequence = [];
  for (let i = 0; i <= positionNumber; i++) {
    if (i === 0 || i === 1) {
      fibonacciSequence.push(i);
    } else {
      fibonacciSequence.push(
        fibonacciSequence[i - 1] + fibonacciSequence[i - 2],
      );
    }
  }
  return fibonacciSequence[positionNumber];
};
fibonacci(0);

// Do not edit below this line
module.exports = fibonacci;
