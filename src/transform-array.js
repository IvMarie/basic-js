const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!");}
  if (arr.length <= 1) { return arr; }

  let result = [];
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {
    if((typeof arr[i] === 'string') && (controlSequences.includes(arr[i]))) {
      if (arr[i].includes('next')) {
        if (arr[i].includes('double') && i < (arr.length - 1)) { result.push(arr[i+1]); } else i++;
      } else {
        if ((i - 1) === 0 || ((i - 2) >= 0) && (arr[i - 2] !== '--discard-next')) {
          if (arr[i].includes('double')){ result.push(arr[i - 1]);
          } else { result.pop(); }
        }
      }
    } else { result.push(arr[i]); }
  }

  return result;
}

module.exports = {
  transform
};
