const convertToCelsius = function(fahrenheit) {
  let fahrenheit1 = (fahrenheit - 32) * (5 / 9);
  return Math.round(fahrenheit1 * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
 let celciusConverted = num2 * (9 / 5) + 32;
  return Math.round(celciusConverted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
