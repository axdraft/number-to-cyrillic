/**
 * Number in words
 * @type {Array}
 */
var numberToWordArray = ['', 'одна', 'дві', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять',
  '', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять',
  'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять',
  '', 'десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят',
  'дев\'яносто',
  '', 'сто', 'двісті', 'триста', 'чотириста', 'п\'ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев\'ятсот',
  'тисяч', 'тисяча', 'тисячі', 'тисячі', 'тисячі', 'тисяч', 'тисяч', 'тисяч', 'тисяч', 'тисяч',
  'мільйонів', 'мільйон', 'мільйони', 'мільйони', 'мільйона', 'мільйонів', 'мільйонів', 'мільйонів',
  'мільйонів', 'мільйонів',
  'мільярдів', 'мільярд', 'мільярда', 'мільярда', 'мільярда', 'мільярдів', 'мільярдів', 'мільярдів',
  'мільярдів', 'мільярдів'];
/**
 * Bill in words
 * @type {Array}
 */
var billToWordArray = ['гривень', 'гривня', 'гривнi', 'гривнi', 'гривнi', 'гривень', 'гривень', 'гривень',
  'гривень', 'гривень'];
/**
 * Cent in words
 * @type {Array}
 */
var centToWordArray = ['копійок', 'копійка', 'копійки', 'копійки', 'копійки', 'копійок', 'копійок', 'копійок',
  'копійок', 'копійок'];
/**
 * Matrix with appropriate values: number - bill - cent
 * @type {Array}
 */
var matrix = new Array(10);

/**
 * Convert number to string
 * @param money
 */
function numberToString(money) {
  /**
   * Using for splitting current number on bill and cent
   * @type {Object}
   */
  var currentNumber = {
    bill: '',
    cent: ''
  };
  /**
   * Using for returning values
   * @type {Object}
   */
  var result = {
    bill : '',
    cent : '',
    mixed: ''
  };
  /**
   * Whether given number is negative
   * @type {boolean}
   */
  var isNegative = false;

  // Remove all useless symbols from the line
  money = money.toString().replace(',', '.').replace(/[ \f\n\r\t\v]/g, '');

  _fillMatrix();

  // Check that number is negative
  if (money.charAt(0) === '-') {
    money = money.substr(1);
    isNegative = true;
  }

  money = Math.round(money * 100) / 100 + '';

  // Check for cent in the string
  if (money.indexOf('.') !== -1) {
    currentNumber.bill = money.split('.')[0];
    currentNumber.cent = money.split('.')[1];

    if (currentNumber.cent.length === 1)
      currentNumber.cent += '0';
  } else
    currentNumber.bill = money.toString();

  // Allow only number less than 12 symbols
  if (currentNumber.bill.length > 12)
    throw new Error('The number is too long.');

  result.bill = _buildString(currentNumber.bill, billToWordArray);
  result.cent = _buildString(currentNumber.cent, centToWordArray);

  if (result.cent)
    result.mixed = result.bill + ' ' + result.cent;
  else
    result.mixed = result.bill;

  return isNegative ? 'мінус ' : '' + result.mixed;
}

/**
 * Fill matrix with array values
 * @private
 */
function _fillMatrix() {
  var i, j, k = 0;
  var n = numberToWordArray.length;

  for (j = 0; j < 10; ++j)
    matrix[j] = new Array(n);

  for (i = 0; i < n; ++i)
    for (j = 0; j < 10; ++j)
      matrix[j][i] = numberToWordArray[k++];
}

function _buildString(price, D) {
  var hundred, ten, unit;
  var letter = '';
  var i, n;

  if (price)
    for (i = 0, n = price.length; i < n; i += 3) {
      hundred = ten = unit = '';

      if (_n(price, i + 2, 2) > 10 && _n(price, i + 2, 2) < 20) {
        unit = ' ' + matrix[_n(price, i + 1, 1)][1] + ' ' + matrix[0][i / 3 + 3];
        i === 0 ? unit += D[0] : 0;
      }
      else {
        unit = matrix[_n(price, i + 1, 1)][0];
        unit === ' ' ? unit = '' : (unit === ' ' + matrix[_n(price, i + 1, 1)][i / 3 + 3]) ? 0 : unit = ' ' + unit;
        i === 0 ? unit += ' ' + D[_n(price, i + 1, 1)] : 0;
        (ten = matrix[_n(price, i + 2, 1)][2]) !== '' ? ten = ' ' + ten : 0;
      }

      (hundred = matrix[_n(price, i + 3, 1)][3]) !== '' ? hundred = ' ' + hundred : 0;

      if (price.substr(price.length - i - 3, 3) === '000' && unit === ' ' + matrix[0][i / 3 + 3])
        unit = '';

      letter = hundred + ten + unit;
    }

  if (letter === ' ' + billToWordArray[0])
    return 'нуль ';

  return letter.substr(1);
}

function _n(price, start, length) {
  if (start > price.length)
    return 0;
  else
    return Number(price.substr(price.length - start, length));
}

module.exports = numberToString;