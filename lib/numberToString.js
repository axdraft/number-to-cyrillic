/**
 * Convert number to string
 * @param {String|Number} number
 * @param {Object} options
 */
function numberToString(number, options) {
  /**
   * Method options
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * @param {boolean} capitalize * * * * * * * * * * * * * * * *
   * @default false  * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * @param {boolean} currency * * * * * * * * * * * * * * * * *
   * @default uah * * * * * * * * * * * * * * * * * * * * * *  *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * @param {string} language * * * * * * * * * * * * * * * *  *
   * @default ua * * * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   */
  var defaultOptions = {
    capitalize: false,
    currency: 'uah',
    language: 'ua'
  };

  // Change default options here
  if (options) {
    if (typeof options.capitalize === 'boolean') {
      defaultOptions.capitalize = options.capitalize;
    }

    if (typeof options.currency === 'string') {
      defaultOptions.currency = options.currency;
    }

    if (typeof options.currency === 'boolean') {
      defaultOptions.currency = 'noCurrency';
    }

    if (typeof options.language === 'string') {
      defaultOptions.language = options.language === 'uk' ? 'ua' : options.language;
    }
  }

  /**
   * Text translations for all units
   */
  var textValues = {
    ua: {
      minus: 'мінус',
      numbers: [
        [
          '',
          'одна',
          'дві',
          'три',
          'чотири',
          'п\'ять',
          'шість',
          'сім',
          'вісім',
          'дев\'ять'
        ],
        [
          'нуль',
          'один',
          'два',
          'три',
          'чотири',
          'п\'ять',
          'шість',
          'сім',
          'вісім',
          'дев\'ять'
        ],
        [
          '',
          '',
          'двадцять',
          'тридцять',
          'сорок',
          'п\'ятдесят',
          'шістдесят',
          'сімдесят',
          'вісімдесят',
          'дев\'яносто'
        ],
        [
          '',
          'сто',
          'двісті',
          'триста',
          'чотириста',
          'п\'ятсот',
          'шістсот',
          'сімсот',
          'вісімсот',
          'дев\'ятсот'
        ]
      ],
      tens: [
        'десять',
        'одинадцять',
        'дванадцять',
        'тринадцять',
        'чотирнадцять',
        'п\'ятнадцять',
        'шістнадцять',
        'сімнадцять',
        'вісімнадцять',
        'дев\'ятнадцять'
      ],
      units: [
        [],
        [],
        ['тисяча', 'тисячі', 'тисяч'],
        ['мільйон', 'мільйони', 'мільйонів'],
        ['мільярд', 'мільярди', 'мільярдів'],
        ['трильйон', 'трильйони', 'трильйонів']
      ],
      currency: {
        uah: {
          currencyNameCases: ['гривня', 'гривні', 'гривень'],
          decimalNameCases: ['копійка', 'копійки', 'копійок'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'грн.'
        },
        usd: {
          currencyNameCases: ['долар США', 'долари США', 'доларів США'],
          decimalNameCases: ['цент', 'центи', 'центів'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'долара США'
        },
        eur: {
          currencyNameCases: ['євро', 'євро', 'євро'],
          decimalNameCases: ['євроцент', 'євроценти', 'євроцентів'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'євро'
        },
        noCurrency: {
          currencyNameCases: ['ціла', 'цілих', 'цілих'],
          decimalNameCases: ['сота', 'сотих', 'сотих'],
          currencyValueCase: 0,
          decimalValueCase: 0
        }
      }
    },
    en: {
      minus: 'minus',
      numbers: [
        [
          '',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine'
        ],
        [
          'zero',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine'
        ],
        [
          '',
          '',
          'twenty',
          'thirty',
          'forty',
          'fifty',
          'sixty',
          'seventy',
          'eighty',
          'ninety'
        ],
        [
          '',
          'one hundred',
          'two hundred',
          'three hundred',
          'four hundred',
          'five hundred',
          'six hundred',
          'seven hundred',
          'eight hundred',
          'nine hundred'
        ]
      ],
      tens: [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
      ],
      units: [
        [],
        [],
        ['thousand', 'thousand', 'thousand'],
        ['million', 'million', 'million'],
        ['billion', 'billion', 'billion'],
        ['trillion', 'trillion', 'trillion']
      ],
      currency: {
        uah: {
          currencyNameCases: ['hryvnia', 'hryvnias', 'hryvnias'],
          decimalNameCases: ['cent', 'cents', 'cents'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'UAH'
        },
        usd: {
          currencyNameCases: ['dollar', 'dollars', 'dollars'],
          decimalNameCases: ['cent', 'cents', 'cents'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'USD'
        },
        eur: {
          currencyNameCases: ['euro', 'euros', 'euros'],
          decimalNameCases: ['cent', 'cents', 'cents'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'EUR'
        },
        noCurrency: {
          currencyNameCases: ['', '', ''],
          decimalNameCases: ['', '', ''],
          currencyValueCase: 0,
          decimalValueCase: 0
        }
      }
    },
    ru: {
      minus: 'минус',
      numbers: [
        [
          '',
          'одна',
          'две',
          'три',
          'четыре',
          'пять',
          'шесть',
          'семь',
          'восемь',
          'девять'
        ],
        [
          'ноль',
          'один',
          'два',
          'три',
          'четыре',
          'пять',
          'шесть',
          'семь',
          'восемь',
          'девять'
        ],
        [
          '',
          '',
          'двадцать',
          'тридцать',
          'сорок',
          'пятьдесят',
          'шестьдесят',
          'семьдесят',
          'восемьдесят',
          'девяносто'
        ],
        [
          '',
          'сто',
          'двести',
          'триста',
          'четыреста',
          'пятьсот',
          'шестьсот',
          'семьсот',
          'восемьсот',
          'девятьсот'
        ]
      ],
      tens: [
        'десять',
        'одиннадцать',
        'двенадцать',
        'тринадцать',
        'четырнадцать',
        'пятнадцать',
        'шестнадцать',
        'семнадцать',
        'восемнадцать',
        'девятнадцать'
      ],
      units: [
        [],
        [],
        ['тысяча', 'тысячи', 'тысяч'],
        ['миллион', 'миллиона', 'миллионов'],
        ['миллиард', 'миллиарда', 'миллиардов'],
        ['триллион', 'триллиона', 'триллионов']
      ],
      currency: {
        uah: {
          currencyNameCases: ['гривна', 'гривны', 'гривен'],
          decimalNameCases: ['копейка', 'копейки', 'копеек'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'грн.'
        },
        usd: {
          currencyNameCases: ['доллар США', 'доллара США', 'долларов США'],
          decimalNameCases: ['цент', 'цента', 'центов'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'доллара США'
        },
        eur: {
          currencyNameCases: ['евро', 'евро', 'евро'],
          decimalNameCases: ['евроцент', 'евроцента', 'евроцентов'],
          currencyValueCase: 1,
          decimalValueCase: 0,
          shortName: 'евро'
        },
        noCurrency: {
          currencyNameCases: ['целая', 'целых', 'целых'],
          decimalNameCases: ['сотая', 'сотых', 'сотых'],
          currencyValueCase: 0,
          decimalValueCase: 0
        }
      }
    },
  };

  /**
   * Text cases dictionary
   */
  var textCasesDictionary = {
    forOne: 0,
    fromTwoToFour: 1,
    fromFiveToNine: 2
  };

  /**
   * Set current currency
   */
  var currencyValues = textValues[defaultOptions.language].currency[defaultOptions.currency];

  /**
   * Make decimal number from the given
   */
  var numberValue = parseFloat(number)
    .toFixed(2);
  // Integer part of the number
  var integerValue = Math.trunc(numberValue);
  // Fractional part of the number
  var fractionalValue = numberValue.split('.')[1];
  // Integer's part length
  var numberLength = Math.abs(integerValue)
    .toString().length;
  // Length of units' classes
  var classesOfUnits = Math.ceil(numberLength / 3);
  // Number of digits of the last unit's part
  var numbersLastClass = numberLength % 3 || 3;

  /**
   * Current number class
   */
  var currentClassNumber = Math.abs(integerValue)
    .toString()
    .substr(0, numbersLastClass);
  /**
   * Number of deleted digits
   */
  var deletedDigits = 0;
  /**
   * Result value
   * This value will be returned from this method
   */
  var result = [];
  /**
   * Collected fractional part
   */
  var fractionalWords = [];
  /**
   * Currency case
   */
  var currencyTextCase = 2;
  /**
   * Fractional part case
   */
  var fractionalTextCase = 2;
  /**
   * Current unit class
   */
  var currentUnitClass;
  /**
   * Digit case
   */
  var classTextCase;
  /**
   * Current fractional digit
   */
  var currentFractinalDigit;
  /**
   * Fractional index
   */
  var fractionalIndex;

  /**
   * If number is negative
   */
  if (integerValue < 0) {
    // Push minus word to result array
    result.push(textValues[defaultOptions.language].minus);
    // Remove one digit from the number
    deletedDigits++;
  }

  if (fractionalValue === '00' && defaultOptions.currency === 'noCurrency') {
    currencyValues.currencyValueCase = 1;
  }

  /**
   * For each unit class
   */
  for (currentUnitClass = classesOfUnits; currentUnitClass > 0; currentUnitClass--) {
    classTextCase = false;

    // For each digit of the class
    while (currentClassNumber.length > 0) {
      // Current digit
      var currentDigit = parseInt(currentClassNumber.substr(0, 1));

      //
      // Get next value only for english language
      //
      if (defaultOptions.language === 'en') {
        var nextDigit = parseInt(currentClassNumber.substr(1, 1));
      }

      if (currentClassNumber === '000') {
        currentClassNumber = '';
        deletedDigits += 3;
        continue;
      }

      // The name of units class
      if (currentDigit === 1) {
        classTextCase = textCasesDictionary.fromFiveToNine;

        if (currentClassNumber.length < 2) {
          classTextCase = textCasesDictionary.forOne;
        }
      } else if (currentDigit > 1 && currentDigit < 5) {
        classTextCase = textCasesDictionary.fromTwoToFour;
      } else if (currentDigit > 4 && currentDigit < 10) {
        classTextCase = textCasesDictionary.fromFiveToNine;
      } else if (currentDigit === 0) {
        classTextCase = textCasesDictionary.fromFiveToNine;
      }

      // If integer value equals zero
      if (integerValue === 0) {
        result.push(textValues[defaultOptions.language].numbers[1][0]);
      }

      // Get currency name
      if (currentUnitClass === 1) {
        if ((currentClassNumber.length !== 2 || currentDigit !== 1) && currentClassNumber.length < 3) {
          // If the last digit equals 1
          if (currentDigit === 1) {
            currencyTextCase = textCasesDictionary.forOne;
            // If the last digit equals 2, 3 or 4
          } else if (currentDigit > 1 && currentDigit < 5) {
            currencyTextCase = textCasesDictionary.fromTwoToFour;
          } else {
            currencyTextCase = textCasesDictionary.fromFiveToNine;
          }
        }
      }

      // For digits in range 10-19
      if (currentClassNumber.length === 2 && currentDigit === 1) {
        result.push(textValues[defaultOptions.language].tens[currentClassNumber.substr(1, 1)]);
        // Remove digit
        deletedDigits++;
        // Move to the next class
        currentClassNumber = '';
        classTextCase = textCasesDictionary.fromFiveToNine;
        // Else if number not in range 10-19 and not equal 0
      } else if (currentDigit !== 0) {
        // If thousands
        if (currentUnitClass === 2 && currentClassNumber.length === 1) {
          result.push(textValues[defaultOptions.language].numbers[0][currentDigit]);
        } else {
          // If hundreds or tens
          if (currentClassNumber.length > 1) {
            result.push(textValues[defaultOptions.language].numbers[currentClassNumber.length][currentDigit]);

            if (!!nextDigit && currentClassNumber.length === 2) {
              result.push('-');
            }
          } else if (currentUnitClass === 1) {
            if (currentDigit === 1 && defaultOptions.currency === 'uah') {
              result.push(textValues[defaultOptions.language].numbers[0][currentDigit]);
            } else if (currentDigit === 2 && defaultOptions.currency === 'uah') {
              result.push(textValues[defaultOptions.language].numbers[0][currentDigit]);
            } else {
              result.push(textValues[defaultOptions.language].numbers[currencyValues.currencyValueCase][currentDigit]);
            }
          } else {
            result.push(textValues[defaultOptions.language].numbers[1][currentDigit]);
          }
        }
      }

      // Remove first digit from unit class
      currentClassNumber = currentClassNumber.substr(1);
      // Remove one digit
      deletedDigits++;
    }

    // If we have class name
    if (classTextCase !== false && currentUnitClass > 1) {
      result.push(textValues[defaultOptions.language].units[currentUnitClass][classTextCase]);
    }

    // Get the number of the next class
    currentClassNumber = integerValue.toString()
      .substr(deletedDigits, 3);
  }

  // Edit fractional part
  for (fractionalIndex = 0; fractionalIndex < fractionalValue.length; fractionalIndex++) {
    // Current digit
    currentFractinalDigit = parseInt(fractionalValue[fractionalIndex]);

    // If the digit in the range 10-19
    if (parseInt(fractionalValue) > 9 && parseInt(fractionalValue) < 20) {
      fractionalWords.push(textValues[defaultOptions.language].tens[fractionalValue.substr(1, 1)]);
      fractionalIndex = 2;
      // If the digit not in the range 10-19 and doesn't equal 0
    } else if (currentFractinalDigit !== 0) {
      if (fractionalIndex === 0) {
        fractionalWords.push(textValues[defaultOptions.language].numbers[2][currentFractinalDigit]);
      } else if (fractionalIndex === 1) {
        if (defaultOptions.language === 'en') {
          fractionalWords.push('-');
        }
        fractionalWords.push(textValues[defaultOptions.language].numbers[0][currentFractinalDigit]);
      }

      if (fractionalIndex === 1) {
        if (currentFractinalDigit === 1) {
          fractionalTextCase = 0;
        } else if (currentFractinalDigit > 1 && currentFractinalDigit < 5) {
          fractionalTextCase = 1;
        }
      }
    }
  }

  if (parseInt(fractionalValue) === 0) {
    fractionalWords.push(textValues[defaultOptions.language].numbers[1][0]);
  }

  // Edit result
  result = result.filter(function (value) {
    if (value.trim() !== '') {
      return true;
    }
  });

  /**
   * Final string to be returned
   */
  var finalResult = result.join(' ');

  /**
   * Fractional part
   */
  var fractionalPart = fractionalWords.join(' ');

  /**
   * Remove extra spaces
   */
  if (defaultOptions.language === 'en') {
    finalResult = finalResult.split(' - ')
      .join('-');

    fractionalPart = fractionalPart.split(' - ')
      .join('-');
  }

  // Capitalize string
  if (defaultOptions.capitalize) {
    finalResult = finalResult[0].toLocaleUpperCase() + finalResult.substr(1);
  }

  return {
    convertedInteger: finalResult,
    integerCurrency: currencyValues.currencyNameCases[currencyTextCase],
    convertedFractional: fractionalPart,
    fractionalCurrency: currencyValues.decimalNameCases[fractionalTextCase],
    integer: integerValue,
    fractional: parseInt(fractionalValue),
    shortName: currencyValues.shortName
  };
}

module.exports = numberToString;
