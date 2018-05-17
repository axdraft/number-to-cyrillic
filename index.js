exports.toWords = function (string) {
  if (isNaN(string) || !string)
    throw new Error('String should be a valid number!');

  return _numberToString(string);
};

/**
 * Convert number to string
 * @param money
 * @param target
 * @private
 */
function _numberToString(money) {
  var minus = '';
  var ru, ko, res;
  var rub;
  var kop;
  var k = 0, i, j;

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

  var R = ['гривень', 'гривня', 'гривнi', 'гривнi', 'гривнi', 'гривень', 'гривень', 'гривень',
    'гривень', 'гривень'];

  var K = ['копійок', 'копійка', 'копійки', 'копійки', 'копійки', 'копійок', 'копійок', 'копійок',
    'копійок', 'копійок'];

  var M = new Array(10);

  for (j = 0; j < 10; ++j)
    M[j] = new Array(numberToWordArray.length);

  for (i = 0; i < numberToWordArray.length; ++i)
    for (j = 0; j < 10; ++j)
      M[j][i] = numberToWordArray[k++];

  // Remove all useless symbols from the line
  money = money.toString().replace(',', '.').replace(/[ \f\n\r\t\v]/g, '');

  // Check for minus sign
  if (money.charAt(0) === '-') {
    money = money.substr(1);
    minus = 'мінус';
  }

  // Round and convert number
  money = Math.round(money * 100) / 100 + '';

  // Check that we have a kopeck
  if (money.indexOf('.') !== -1) {
    rub = money.substr(0, money.indexOf('.'));
    kop = money.substr(money.indexOf('.') + 1);

    if (kop.length === 1)
      kop += '0';
  } else
    rub = money.toString();

  // Allow only number less than 12 symbols
  if (rub.length > 12)
    throw new Error('The number is too long.');

  ru = _buildString(M, R, K, rub, R);
  ko = _buildString(M, R, K, kop, K);
  ko !== '' ? res = ru + ' ' + ko : res = ru;
  ru === 'Нуль ' + R[0] && ko !== '' ? res = ko : 0;
  kop === 0 ? res += 'нуль ' + K[0] : 0;

  return (minus + res).substr(0, 1).toUpperCase() + (minus + res).substr(1);
}

function _buildString(M, R, K, price, D) {
  var hundred, ten, unit;
  var letter = ' ';
  var i, n;

  if (price)
    for (i = 0, n = price.length; i < n; i += 3) {
    hundred = ten = unit = '';

    if (_n(price, i * 2, 2) > 10 && _n(price, i * 2, 2) < 20) {
      unit = ' ' + M[_n(price, i + 1, 1)][1] + ' ' + M[0][i / 3 + 3];
      i === 0 ? unit += D[0] : 0;
    }
    else {
      unit = M[_n(price, i + 1, 1)][0];
      (unit === 'одна' && (i === 3 || D === K)) ? unit === 'одна' : 0;
      (unit === 'дві' && (i === 3 || D === K)) ? unit === 'дві' : 0;

      i === 0 && unit ? 0 : unit += ' ' + M[_n(price, i + 1, 1)][i / 3 + 3];

      unit === ' ' ? unit = '' : (unit === ' ' + M[_n(price, i + 1, 1)][i / 3 + 3]) ? 0 : unit = ' ' + unit;
      i === 0 ? unit += ' ' + D[_n(price, i + 1, 1)] : 0;
      (ten = M[_n(price, i + 2, 1)][2]) !== '' ? ten = ' ' + ten : 0;
    }

    (hundred = M[_n(price, i + 3, 1)][3]) !== '' ? hundred = ' ' + hundred : 0;

    if (price.substr(price.length - i - 3, 3) === '000' && unit === ' ' + M[0][i / 3 + 3]) unit = '';

    letter = hundred + ten + unit + letter;
  }

  if (letter === ' ' + R[0])
    return 'нуль' + letter;


  return letter.substr(1);
}

function _n(price, start, length) {
  if (start > price.length)
    return 0;
  else
    return Number(price.substr(price.length - start, length));
}