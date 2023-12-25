const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const obj = options;
  let addRepeat = [];
  let result = [];

  if (!obj.separator) { obj.separator = '+'; }
  if (!obj.additionSeparator) { obj.additionSeparator = '|'; }
  if (!obj.repeatTimes) { obj.repeatTimes = 1;}
  if (!obj.additionRepeatTimes) { obj.additionRepeatTimes = 1; }

  if (obj.addition !== undefined) {
    for (let i = 0; i < obj.additionRepeatTimes; i++) {
      addRepeat.push(`${obj.addition}`);
    }

    addRepeat = addRepeat.join(`${obj.additionSeparator}`);
  } else { addRepeat = ''; }

  for (let i = 0; i < obj.repeatTimes; i++) {
    result.push(`${str}${addRepeat}`);
  }

  return result.join(`${obj.separator}`);
}

module.exports = {
  repeater
};
