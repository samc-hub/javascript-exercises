const convertToCelsius = function(num) {
  let number = (num - 32) * (5 / 9);
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function(num2) {
 let number2 = num2 * (9 / 5) + 32;
  return Math.round(number2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
