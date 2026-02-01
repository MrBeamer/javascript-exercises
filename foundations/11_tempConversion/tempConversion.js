const convertToCelsius = function (temperature) {
  const temperatureCelsius = (temperature - 32) * (5 / 9);
  const roundedTemperatureCelsius = Math.round(temperatureCelsius * 10) / 10;
  return roundedTemperatureCelsius;
};

const convertToFahrenheit = function (temperature) {
  const temperatureFahrenheit = temperature * 1.8 + 32;
  const roundedTemperatureFahrenheit =
    Math.round(temperatureFahrenheit * 10) / 10;
  return roundedTemperatureFahrenheit;
};
console.log(convertToCelsius(32));
// console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
/*
Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
Because we are human, we want the result temperature to be rounded to one decimal place: i.e., convertToCelsius(100) should return 37.8 and not 37.77777777777778.

°F = (celsius number × 1.8) + 32
°C = (fahrenheit number -32) /32
*/
