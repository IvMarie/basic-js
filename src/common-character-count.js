const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let min = s1.split('');
  let max = s2.split('');

  if (s1.length > s2.length) {
    max = s1.split('');
    min = s2.split('');
  }

  let result = [];

  min.forEach(el => {
    if(max.includes(el)) {
      result.push(max.splice(max.indexOf(el), 1));
    }
  })

  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
