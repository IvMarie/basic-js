const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];

  if (names.length === 0) return names;

  function changeNameFile(y, arr) {
    let name = y;

    if (arr.includes(y)) {
      const n = y.substr((y.length - 2), 1);
      name = y.replace(/\([1-9]{1}\)$/, `(${+n + 1})`);
      changeNameFile(name, arr);
    }
    return name;
  }

  names.forEach(x => {
    if (!result.includes(x)) {
      result.push(x);
    } else {
      result.push(changeNameFile(`${x}(1)`, result));
    }
  });

  return result;
}

module.exports = {
  renameFiles
};
