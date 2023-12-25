const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;

  const result = [];
  let count = 1;

  str.split('').forEach((el, i, arr) => {
    if (el === arr[i + 1]) {
      count++;
    } else if (count === 1) {
      result.push(el);
    } else {
      result.push(`${count}${el}`);
      count = 1;
    }
  });

  return result.join('');
}

module.exports = {
  encodeLine
};
