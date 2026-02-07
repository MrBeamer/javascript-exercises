const palindromes = function (str) {
  let lowercaseStr = str.toLowerCase();
  let sanitizedStr = "";
  for (let i = 0; i < lowercaseStr.length; i++) {
    if (
      (lowercaseStr.charCodeAt(i) > 47 && lowercaseStr.charCodeAt(i) < 58) ||
      (lowercaseStr.charCodeAt(i) > 96 && lowercaseStr.charCodeAt(i) < 123)
    ) {
      sanitizedStr += lowercaseStr[i];
    }
  }
  let reversedStr = sanitizedStr.split("").reverse().join("");
  return sanitizedStr === reversedStr ? true : false;
};

console.log(palindromes("racecar"));
console.log(palindromes("taco"));

// Do not edit below this line
module.exports = palindromes;
