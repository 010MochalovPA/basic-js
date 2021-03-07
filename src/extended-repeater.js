const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let firstPart = [];
  if (!options.hasOwnProperty('repeatTimes') && options.repeatTimes^0 != options.repeatTimes) options.repeatTimes = 1;
  if (!options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes^0 != options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('addition')) options.addition = '';
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';
  for (let i = 1; i <= options.additionRepeatTimes;i++) firstPart.push(String(options.addition));
  for (let i = 1; i <= options.repeatTimes;i++) result.push(String(str) + firstPart.join(options.additionSeparator));
  return result.join(options.separator);;
};
  
