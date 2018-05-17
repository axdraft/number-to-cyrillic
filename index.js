var numberToString = require('./lib/numberToString');
/**
 * Converts number to text
 *
 * = = = = = = = = = = =
 *    Only cyrillic!
 * = = = = = = = = = = =
 *
 * @param value
 * @returns string
 */
exports.convert = function (value) {
  if (isNaN(value) || !value)
    throw new Error('String should be a valid number!');

  return numberToString(value);
};