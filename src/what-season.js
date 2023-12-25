const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if((!(date instanceof Date) || Object.keys(date).length > 0)) {
    throw new Error('Invalid date!');
  }

  let monthIndex = date.getMonth();

  if (monthIndex >= 2 &&  monthIndex <= 4) return "spring";
  else if (monthIndex >= 5 && monthIndex <= 7) return "summer";
  else if (monthIndex >= 8 && monthIndex <= 10) return "autumn";
  else return "winter";
}

module.exports = {
  getSeason
};
