const reverseString = function (str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    reversedString += str[i];
  }
  return reversedString;
};

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
