var expect = require('chai').expect;
var number2String = require('../index').convert;

describe('Test all test-cases with default options', function () {

  it('should display correct value for 0', function () {
    expect(number2String(0)).to.deep.equal({
      value: 'нуль',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1', function () {
    expect(number2String(1)).to.deep.equal({
      value: 'одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 2', function () {
    expect(number2String(2)).to.deep.equal({
      value: 'дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 5', function () {
    expect(number2String(5)).to.deep.equal({
      value: 'п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 11', function () {
    expect(number2String(11)).to.deep.equal({
      value: 'одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 20', function () {
    expect(number2String(20)).to.deep.equal({
      value: 'двадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 21', function () {
    expect(number2String(21)).to.deep.equal({
      value: 'двадцять одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 22', function () {
    expect(number2String(22)).to.deep.equal({
      value: 'двадцять дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 25', function () {
    expect(number2String(25)).to.deep.equal({
      value: 'двадцять п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 30', function () {
    expect(number2String(30)).to.deep.equal({
      value: 'тридцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 41', function () {
    expect(number2String(41)).to.deep.equal({
      value: 'сорок одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 52', function () {
    expect(number2String(52)).to.deep.equal({
      value: 'п\'ятдесят дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 65', function () {
    expect(number2String(65)).to.deep.equal({
      value: 'шістдесят п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 70', function () {
    expect(number2String(70)).to.deep.equal({
      value: 'сімдесят',
      currency: 'гривень'
    });
  });

  it('should display correct value for 81', function () {
    expect(number2String(81)).to.deep.equal({
      value: 'вісімдесят одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 92', function () {
    expect(number2String(92)).to.deep.equal({
      value: 'дев\'яносто дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 100', function () {
    expect(number2String(100)).to.deep.equal({
      value: 'сто',
      currency: 'гривень'
    });
  });

  it('should display correct value for 101', function () {
    expect(number2String(101)).to.deep.equal({
      value: 'сто одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 102', function () {
    expect(number2String(102)).to.deep.equal({
      value: 'сто дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 105', function () {
    expect(number2String(105)).to.deep.equal({
      value: 'сто п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 110', function () {
    expect(number2String(110)).to.deep.equal({
      value: 'сто десять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 111', function () {
    expect(number2String(111)).to.deep.equal({
      value: 'сто одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 120', function () {
    expect(number2String(120)).to.deep.equal({
      value: 'сто двадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 131', function () {
    expect(number2String(131)).to.deep.equal({
      value: 'сто тридцять одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 142', function () {
    expect(number2String(142)).to.deep.equal({
      value: 'сто сорок дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 155', function () {
    expect(number2String(155)).to.deep.equal({
      value: 'сто п\'ятдесят п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 160', function () {
    expect(number2String(160)).to.deep.equal({
      value: 'сто шістдесят',
      currency: 'гривень'
    });
  });

  it('should display correct value for 171', function () {
    expect(number2String(171)).to.deep.equal({
      value: 'сто сімдесят одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 182', function () {
    expect(number2String(182)).to.deep.equal({
      value: 'сто вісімдесят дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 195', function () {
    expect(number2String(195)).to.deep.equal({
      value: 'сто дев\'яносто п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000)).to.deep.equal({
      value: 'одна тисяча',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001)).to.deep.equal({
      value: 'одна тисяча одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002)).to.deep.equal({
      value: 'одна тисяча дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005)).to.deep.equal({
      value: 'одна тисяча п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011)).to.deep.equal({
      value: 'одна тисяча одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020)).to.deep.equal({
      value: 'одна тисяча двадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031)).to.deep.equal({
      value: 'одна тисяча тридцять одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042)).to.deep.equal({
      value: 'одна тисяча сорок дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055)).to.deep.equal({
      value: 'одна тисяча п\'ятдесят п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101)).to.deep.equal({
      value: 'одна тисяча сто одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111)).to.deep.equal({
      value: 'одна тисяча сто одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221)).to.deep.equal({
      value: 'одна тисяча двісті двадцять одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352)).to.deep.equal({
      value: 'дві тисячі триста п\'ятдесят дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465)).to.deep.equal({
      value: 'три тисячі чотириста шістдесят п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571)).to.deep.equal({
      value: 'чотири тисячі п\'ятсот сімдесят одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682)).to.deep.equal({
      value: 'п\'ять тисяч шістсот вісімдесят дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795)).to.deep.equal({
      value: 'шість тисяч сімсот дев\'яносто п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999)).to.deep.equal({
      value: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001)).to.deep.equal({
      value: 'десять тисяч одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012)).to.deep.equal({
      value: 'одинадцять тисяч дванадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304)).to.deep.equal({
      value: 'двадцять п\'ять тисяч триста чотири',
      currency: 'гривні'
    });
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549)).to.deep.equal({
      value: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891)).to.deep.equal({
      value: 'шістдесят вісім тисяч вісімсот дев\'яносто одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999)).to.deep.equal({
      value: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201)).to.deep.equal({
      value: 'сто сорок дев\'ять тисяч двісті одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911)).to.deep.equal({
      value: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911)).to.deep.equal({
      value: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911)).to.deep.equal({
      value: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 24352911', function () {
    expect(number2String(24352911)).to.deep.equal({
      value: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 101352911', function () {
    expect(number2String(101352911)).to.deep.equal({
      value: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 11352911', function () {
    expect(number2String(11352911)).to.deep.equal({
      value: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1000000', function () {
    expect(number2String(1000000)).to.deep.equal({
      value: 'один мільйон',
      currency: 'гривень'
    });
  });

  it('should display correct value for 230000', function () {
    expect(number2String(230000)).to.deep.equal({
      value: 'двісті тридцять тисяч',
      currency: 'гривень'
    });
  });
});

describe('Test all test-cases with currency usd', function () {
  it('should display correct value for 0', function () {
    expect(number2String(0, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'нуль',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1', function () {
    expect(number2String(1, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 2', function () {
    expect(number2String(2, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 5', function () {
    expect(number2String(5, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 11', function () {
    expect(number2String(11, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 20', function () {
    expect(number2String(20, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 21', function () {
    expect(number2String(21, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 22', function () {
    expect(number2String(22, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 25', function () {
    expect(number2String(25, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 30', function () {
    expect(number2String(30, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'тридцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 41', function () {
    expect(number2String(41, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сорок один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 52', function () {
    expect(number2String(52, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'п\'ятдесят два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 65', function () {
    expect(number2String(65, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'шістдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 70', function () {
    expect(number2String(70, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сімдесят',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 81', function () {
    expect(number2String(81, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'вісімдесят один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 92', function () {
    expect(number2String(92, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'дев\'яносто два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 100', function () {
    expect(number2String(100, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 101', function () {
    expect(number2String(101, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 102', function () {
    expect(number2String(102, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 105', function () {
    expect(number2String(105, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 110', function () {
    expect(number2String(110, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто десять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 111', function () {
    expect(number2String(111, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 120', function () {
    expect(number2String(120, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто двадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 131', function () {
    expect(number2String(131, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто тридцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 142', function () {
    expect(number2String(142, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто сорок два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 155', function () {
    expect(number2String(155, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто п\'ятдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 160', function () {
    expect(number2String(160, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто шістдесят',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 171', function () {
    expect(number2String(171, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто сімдесят один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 182', function () {
    expect(number2String(182, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто вісімдесят два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 195', function () {
    expect(number2String(195, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто дев\'яносто п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча двадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча тридцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча сорок два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча п\'ятдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча сто один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча сто одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одна тисяча двісті двадцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'дві тисячі триста п\'ятдесят два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'три тисячі чотириста шістдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'чотири тисячі п\'ятсот сімдесят один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'п\'ять тисяч шістсот вісімдесят два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'шість тисяч сімсот дев\'яносто п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'десять тисяч один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одинадцять тисяч дванадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять п\'ять тисяч триста чотири',
      currency: 'долари США'
    });
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'шістдесят вісім тисяч вісімсот дев\'яносто один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто сорок дев\'ять тисяч двісті один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 24352911', function () {
    expect(number2String(24352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 101352911', function () {
    expect(number2String(101352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 11352911', function () {
    expect(number2String(11352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'доларів США'
    });
  });
});

describe('Test all test-cases with currency eur', function () {

  it('should display correct value for 0', function () {
    expect(number2String(0, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'нуль',
      currency: 'євро'
    });
  });

  it('should display correct value for 1', function () {
    expect(number2String(1, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'один',
      currency: 'євро'
    });
  });

  it('should display correct value for 2', function () {
    expect(number2String(2, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'два',
      currency: 'євро'
    });
  });

  it('should display correct value for 5', function () {
    expect(number2String(5, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 11', function () {
    expect(number2String(11, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 20', function () {
    expect(number2String(20, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 21', function () {
    expect(number2String(21, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять один',
      currency: 'євро'
    });
  });

  it('should display correct value for 22', function () {
    expect(number2String(22, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять два',
      currency: 'євро'
    });
  });

  it('should display correct value for 25', function () {
    expect(number2String(25, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 30', function () {
    expect(number2String(30, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'тридцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 41', function () {
    expect(number2String(41, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сорок один',
      currency: 'євро'
    });
  });

  it('should display correct value for 52', function () {
    expect(number2String(52, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'п\'ятдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 65', function () {
    expect(number2String(65, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'шістдесят п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 70', function () {
    expect(number2String(70, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сімдесят',
      currency: 'євро'
    });
  });

  it('should display correct value for 81', function () {
    expect(number2String(81, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'вісімдесят один',
      currency: 'євро'
    });
  });

  it('should display correct value for 92', function () {
    expect(number2String(92, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'дев\'яносто два',
      currency: 'євро'
    });
  });

  it('should display correct value for 100', function () {
    expect(number2String(100, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто',
      currency: 'євро'
    });
  });

  it('should display correct value for 101', function () {
    expect(number2String(101, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто один',
      currency: 'євро'
    });
  });

  it('should display correct value for 102', function () {
    expect(number2String(102, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто два',
      currency: 'євро'
    });
  });

  it('should display correct value for 105', function () {
    expect(number2String(105, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 110', function () {
    expect(number2String(110, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто десять',
      currency: 'євро'
    });
  });

  it('should display correct value for 111', function () {
    expect(number2String(111, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 120', function () {
    expect(number2String(120, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто двадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 131', function () {
    expect(number2String(131, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто тридцять один',
      currency: 'євро'
    });
  });

  it('should display correct value for 142', function () {
    expect(number2String(142, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто сорок два',
      currency: 'євро'
    });
  });

  it('should display correct value for 155', function () {
    expect(number2String(155, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто п\'ятдесят п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 160', function () {
    expect(number2String(160, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто шістдесят',
      currency: 'євро'
    });
  });

  it('should display correct value for 171', function () {
    expect(number2String(171, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто сімдесят один',
      currency: 'євро'
    });
  });

  it('should display correct value for 182', function () {
    expect(number2String(182, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто вісімдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 195', function () {
    expect(number2String(195, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто дев\'яносто п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча',
      currency: 'євро'
    });
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча один',
      currency: 'євро'
    });
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча два',
      currency: 'євро'
    });
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча двадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча тридцять один',
      currency: 'євро'
    });
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча сорок два',
      currency: 'євро'
    });
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча п\'ятдесят п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча сто один',
      currency: 'євро'
    });
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча сто одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одна тисяча двісті двадцять один',
      currency: 'євро'
    });
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'дві тисячі триста п\'ятдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'три тисячі чотириста шістдесят п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'чотири тисячі п\'ятсот сімдесят один',
      currency: 'євро'
    });
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'п\'ять тисяч шістсот вісімдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'шість тисяч сімсот дев\'яносто п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'десять тисяч один',
      currency: 'євро'
    });
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одинадцять тисяч дванадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять п\'ять тисяч триста чотири',
      currency: 'євро'
    });
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'шістдесят вісім тисяч вісімсот дев\'яносто один',
      currency: 'євро'
    });
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто сорок дев\'ять тисяч двісті один',
      currency: 'євро'
    });
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 24352911', function () {
    expect(number2String(24352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 101352911', function () {
    expect(number2String(101352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 11352911', function () {
    expect(number2String(11352911, {
      currency: true,
      capitalize: false,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });
});

describe('Test all test-cases with capital letter', function () {

  it('should display correct value for 0', function () {
    expect(number2String(0, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Нуль',
      currency: 'гривень'
    });
  });

  it('should display correct value for 1', function () {
    expect(number2String(1, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 2', function () {
    expect(number2String(2, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 5', function () {
    expect(number2String(5, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'П\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 11', function () {
    expect(number2String(11, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Одинадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 20', function () {
    expect(number2String(20, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Двадцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 21', function () {
    expect(number2String(21, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Двадцять одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 22', function () {
    expect(number2String(22, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Двадцять дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 25', function () {
    expect(number2String(25, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Двадцять п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 30', function () {
    expect(number2String(30, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Тридцять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 41', function () {
    expect(number2String(41, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сорок одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 52', function () {
    expect(number2String(52, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'П\'ятдесят дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 65', function () {
    expect(number2String(65, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Шістдесят п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 70', function () {
    expect(number2String(70, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сімдесят',
      currency: 'гривень'
    });
  });

  it('should display correct value for 81', function () {
    expect(number2String(81, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Вісімдесят одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 92', function () {
    expect(number2String(92, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Дев\'яносто дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 100', function () {
    expect(number2String(100, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сто',
      currency: 'гривень'
    });
  });

  it('should display correct value for 101', function () {
    expect(number2String(101, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сто одна',
      currency: 'гривня'
    });
  });

  it('should display correct value for 102', function () {
    expect(number2String(102, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сто дві',
      currency: 'гривні'
    });
  });

  it('should display correct value for 105', function () {
    expect(number2String(105, {
      currency: true,
      capitalize: true,
      currentCurrency: 'uah'
    })).to.deep.equal({
      value: 'Сто п\'ять',
      currency: 'гривень'
    });
  });

  it('should display correct value for 110', function () {
    expect(number2String(110, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто десять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 111', function () {
    expect(number2String(111, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 120', function () {
    expect(number2String(120, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто двадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 131', function () {
    expect(number2String(131, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто тридцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 142', function () {
    expect(number2String(142, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто сорок два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 155', function () {
    expect(number2String(155, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто п\'ятдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 160', function () {
    expect(number2String(160, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто шістдесят',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 171', function () {
    expect(number2String(171, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто сімдесят один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 182', function () {
    expect(number2String(182, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто вісімдесят два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 195', function () {
    expect(number2String(195, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Сто дев\'яносто п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча одинадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча двадцять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча тридцять один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча сорок два',
      currency: 'долари США'
    });
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча п\'ятдесят п\'ять',
      currency: 'доларів США'
    });
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101, {
      currency: true,
      capitalize: true,
      currentCurrency: 'usd'
    })).to.deep.equal({
      value: 'Одна тисяча сто один',
      currency: 'долар США'
    });
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Одна тисяча сто одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Одна тисяча двісті двадцять один',
      currency: 'євро'
    });
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Дві тисячі триста п\'ятдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Три тисячі чотириста шістдесят п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Чотири тисячі п\'ятсот сімдесят один',
      currency: 'євро'
    });
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'П\'ять тисяч шістсот вісімдесят два',
      currency: 'євро'
    });
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Шість тисяч сімсот дев\'яносто п\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Десять тисяч один',
      currency: 'євро'
    });
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Одинадцять тисяч дванадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Двадцять п\'ять тисяч триста чотири',
      currency: 'євро'
    });
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Тридцять сім тисяч п\'ятсот сорок дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Шістдесят вісім тисяч вісімсот дев\'яносто один',
      currency: 'євро'
    });
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
      currency: 'євро'
    });
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Сто сорок дев\'ять тисяч двісті один',
      currency: 'євро'
    });
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'П\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 24352911', function () {
    expect(number2String(24352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 101352911', function () {
    expect(number2String(101352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });

  it('should display correct value for 11352911', function () {
    expect(number2String(11352911, {
      currency: true,
      capitalize: true,
      currentCurrency: 'eur'
    })).to.deep.equal({
      value: 'Одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
      currency: 'євро'
    });
  });
});
