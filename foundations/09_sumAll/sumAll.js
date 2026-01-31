const sumAll = function (numb1, numb2) {
  let numberSum = 0;

  if (
    Number.isInteger(numb1) &&
    numb1 > 0 &&
    Number.isInteger(numb2) &&
    numb2 > 0
  ) {
    if (numb1 > numb2) {
      let tempNumb = numb1;
      numb1 = numb2;
      numb2 = tempNumb;
    }

    for (let i = numb1; i <= numb2; i++) {
      numberSum += i;
    }
    return numberSum;
  } else return "ERROR";
};
console.log(sumAll(-10, 4));
// Do not edit below this line
module.exports = sumAll;
