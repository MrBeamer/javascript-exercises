const removeFromArray = function (arr, ...elementsToRemove) {
  return arr.filter((element) => !elementsToRemove.includes(element));
};

console.log(removeFromArray([1, 2, 2, 3, 4], 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
