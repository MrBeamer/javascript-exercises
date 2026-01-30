const repeatString = function (str, numb) {
  let repeatedString = "";
  if (numb < 0) return "ERROR";
  for (let i = 0; i < numb; i++) {
    repeatedString += str;
  }

  return repeatedString;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
