var expect = require('chai').expect;
var number2String = require('../index').convert;

describe('Test all test-cases with default options', function () {

  it('should display correct value for 0', function () {
    expect(number2String(0)).to.equal('нуль гривень нуль копійок');
  });

  it('should display correct value for 1', function () {
    expect(number2String(1)).to.equal('одна гривня нуль копійок');
  });

  it('should display correct value for 2', function () {
    expect(number2String(2)).to.equal('дві гривні нуль копійок');
  });

  it('should display correct value for 5', function () {
    expect(number2String(5)).to.equal('п\'ять гривень нуль копійок');
  });

  it('should display correct value for 11', function () {
    expect(number2String(11)).to.equal('одинадцять гривень нуль копійок');
  });

  it('should display correct value for 20', function () {
    expect(number2String(20)).to.equal('двадцять гривень нуль копійок');
  });

  it('should display correct value for 21', function () {
    expect(number2String(21)).to.equal('двадцять одна гривня нуль копійок');
  });

  it('should display correct value for 22', function () {
    expect(number2String(22)).to.equal('двадцять дві гривні нуль копійок');
  });

  it('should display correct value for 25', function () {
    expect(number2String(25)).to.equal('двадцять п\'ять гривень нуль копійок');
  });

  it('should display correct value for 30', function () {
    expect(number2String(30)).to.equal('тридцять гривень нуль копійок');
  });

  it('should display correct value for 41', function () {
    expect(number2String(41)).to.equal('сорок одна гривня нуль копійок');
  });

  it('should display correct value for 52', function () {
    expect(number2String(52)).to.equal('п\'ятдесят дві гривні нуль копійок');
  });

  it('should display correct value for 65', function () {
    expect(number2String(65)).to.equal('шістдесят п\'ять гривень нуль копійок');
  });

  it('should display correct value for 70', function () {
    expect(number2String(70)).to.equal('сімдесят гривень нуль копійок');
  });

  it('should display correct value for 81', function () {
    expect(number2String(81)).to.equal('вісімдесят одна гривня нуль копійок');
  });

  it('should display correct value for 92', function () {
    expect(number2String(92)).to.equal('дев\'яносто дві гривні нуль копійок');
  });

  it('should display correct value for 100', function () {
    expect(number2String(100)).to.equal('сто гривень нуль копійок');
  });

  it('should display correct value for 101', function () {
    expect(number2String(101)).to.equal('сто одна гривня нуль копійок');
  });

  it('should display correct value for 102', function () {
    expect(number2String(102)).to.equal('сто дві гривні нуль копійок');
  });

  it('should display correct value for 105', function () {
    expect(number2String(105)).to.equal('сто п\'ять гривень нуль копійок');
  });

  it('should display correct value for 110', function () {
    expect(number2String(110)).to.equal('сто десять гривень нуль копійок');
  });

  it('should display correct value for 111', function () {
    expect(number2String(111)).to.equal('сто одинадцять гривень нуль копійок');
  });

  it('should display correct value for 120', function () {
    expect(number2String(120)).to.equal('сто двадцять гривень нуль копійок');
  });

  it('should display correct value for 131', function () {
    expect(number2String(131)).to.equal('сто тридцять одна гривня нуль копійок');
  });

  it('should display correct value for 142', function () {
    expect(number2String(142)).to.equal('сто сорок дві гривні нуль копійок');
  });

  it('should display correct value for 155', function () {
    expect(number2String(155)).to.equal('сто п\'ятдесят п\'ять гривень нуль копійок');
  });

  it('should display correct value for 160', function () {
    expect(number2String(160)).to.equal('сто шістдесят гривень нуль копійок');
  });

  it('should display correct value for 171', function () {
    expect(number2String(171)).to.equal('сто сімдесят одна гривня нуль копійок');
  });

  it('should display correct value for 182', function () {
    expect(number2String(182)).to.equal('сто вісімдесят дві гривні нуль копійок');
  });

  it('should display correct value for 195', function () {
    expect(number2String(195)).to.equal('сто дев\'яносто п\'ять гривень нуль копійок');
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000)).to.equal('одна тисяча гривень нуль копійок');
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001)).to.equal('одна тисяча одна гривня нуль копійок');
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002)).to.equal('одна тисяча дві гривні нуль копійок');
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005)).to.equal('одна тисяча п\'ять гривень нуль копійок');
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011)).to.equal('одна тисяча одинадцять гривень нуль копійок');
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020)).to.equal('одна тисяча двадцять гривень нуль копійок');
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031)).to.equal('одна тисяча тридцять одна гривня нуль копійок');
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042)).to.equal('одна тисяча сорок дві гривні нуль копійок');
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055)).to.equal('одна тисяча п\'ятдесят п\'ять гривень нуль копійок');
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101)).to.equal('одна тисяча сто одна гривня нуль копійок');
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111)).to.equal('одна тисяча сто одинадцять гривень нуль копійок');
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221)).to.equal('одна тисяча двісті двадцять одна гривня нуль копійок');
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352)).to.equal('дві тисячі триста п\'ятдесят дві гривні нуль копійок');
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465)).to.equal('три тисячі чотириста шістдесят п\'ять гривень нуль копійок');
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571)).to.equal('чотири тисячі п\'ятсот сімдесят одна гривня нуль копійок');
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682)).to.equal('п\'ять тисяч шістсот вісімдесят дві гривні нуль копійок');
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795)).to.equal('шість тисяч сімсот дев\'яносто п\'ять гривень нуль копійок');
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999)).to.equal('дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять гривень нуль копійок');
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001)).to.equal('десять тисяч одна гривня нуль копійок');
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012)).to.equal('одинадцять тисяч дванадцять гривень нуль копійок');
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304)).to.equal('двадцять п\'ять тисяч триста чотири гривні нуль копійок');
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549)).to.equal('тридцять сім тисяч п\'ятсот сорок дев\'ять гривень нуль копійок');
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891)).to.equal('шістдесят вісім тисяч вісімсот дев\'яносто одна гривня нуль копійок');
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999)).to.equal('дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять гривень нуль копійок');
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201)).to.equal('сто сорок дев\'ять тисяч двісті одна гривня нуль копійок');
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911)).to.equal('один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень нуль копійок');
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911)).to.equal('два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень нуль копійок');
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911)).to.equal('п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень нуль копійок');
  });

  it('should display correct value for 24352911.41', function () {
    expect(number2String(24352911.41)).to.equal('двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень сорок одна копійка');
  });

  it('should display correct value for 101352911.52', function () {
    expect(number2String(101352911.52)).to.equal('сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень п\'ятдесят дві копійки');
  });

  it('should display correct value for 11352911.75', function () {
    expect(number2String(347352911.75)).to.equal('триста сорок сім мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень сімдесят п\'ять копійок');
  });
});

describe('Test all test-cases with currency off', function () {

  it('should display correct value for 0', function () {
    expect(number2String(0, {
      currency: false
    })).to.equal('нуль цілих нуль сотих');
  });

  it('should display correct value for 1', function () {
    expect(number2String(1, {
      currency: false
    })).to.equal('одна ціла нуль сотих');
  });

  it('should display correct value for 2', function () {
    expect(number2String(2, {
      currency: false
    })).to.equal('дві цілих нуль сотих');
  });

  it('should display correct value for 5', function () {
    expect(number2String(5, {
      currency: false
    })).to.equal('п\'ять цілих нуль сотих');
  });

  it('should display correct value for 11', function () {
    expect(number2String(11, {
      currency: false
    })).to.equal('одинадцять цілих нуль сотих');
  });

  it('should display correct value for 20', function () {
    expect(number2String(20, {
      currency: false
    })).to.equal('двадцять цілих нуль сотих');
  });

  it('should display correct value for 21', function () {
    expect(number2String(21, {
      currency: false
    })).to.equal('двадцять одна ціла нуль сотих');
  });

  it('should display correct value for 22', function () {
    expect(number2String(22, {
      currency: false
    })).to.equal('двадцять дві цілих нуль сотих');
  });

  it('should display correct value for 25', function () {
    expect(number2String(25, {
      currency: false
    })).to.equal('двадцять п\'ять цілих нуль сотих');
  });

  it('should display correct value for 30', function () {
    expect(number2String(30, {
      currency: false
    })).to.equal('тридцять цілих нуль сотих');
  });

  it('should display correct value for 41', function () {
    expect(number2String(41, {
      currency: false
    })).to.equal('сорок одна ціла нуль сотих');
  });

  it('should display correct value for 52', function () {
    expect(number2String(52, {
      currency: false
    })).to.equal('п\'ятдесят дві цілих нуль сотих');
  });

  it('should display correct value for 65', function () {
    expect(number2String(65, {
      currency: false
    })).to.equal('шістдесят п\'ять цілих нуль сотих');
  });

  it('should display correct value for 70', function () {
    expect(number2String(70, {
      currency: false
    })).to.equal('сімдесят цілих нуль сотих');
  });

  it('should display correct value for 81', function () {
    expect(number2String(81, {
      currency: false
    })).to.equal('вісімдесят одна ціла нуль сотих');
  });

  it('should display correct value for 92', function () {
    expect(number2String(92, {
      currency: false
    })).to.equal('дев\'яносто дві цілих нуль сотих');
  });

  it('should display correct value for 100', function () {
    expect(number2String(100, {
      currency: false
    })).to.equal('сто цілих нуль сотих');
  });

  it('should display correct value for 101', function () {
    expect(number2String(101, {
      currency: false
    })).to.equal('сто одна ціла нуль сотих');
  });

  it('should display correct value for 102', function () {
    expect(number2String(102, {
      currency: false
    })).to.equal('сто дві цілих нуль сотих');
  });

  it('should display correct value for 105', function () {
    expect(number2String(105, {
      currency: false
    })).to.equal('сто п\'ять цілих нуль сотих');
  });

  it('should display correct value for 110', function () {
    expect(number2String(110, {
      currency: false
    })).to.equal('сто десять цілих нуль сотих');
  });

  it('should display correct value for 111', function () {
    expect(number2String(111, {
      currency: false
    })).to.equal('сто одинадцять цілих нуль сотих');
  });

  it('should display correct value for 120', function () {
    expect(number2String(120, {
      currency: false
    })).to.equal('сто двадцять цілих нуль сотих');
  });

  it('should display correct value for 131', function () {
    expect(number2String(131, {
      currency: false
    })).to.equal('сто тридцять одна ціла нуль сотих');
  });

  it('should display correct value for 142', function () {
    expect(number2String(142, {
      currency: false
    })).to.equal('сто сорок дві цілих нуль сотих');
  });

  it('should display correct value for 155', function () {
    expect(number2String(155, {
      currency: false
    })).to.equal('сто п\'ятдесят п\'ять цілих нуль сотих');
  });

  it('should display correct value for 160', function () {
    expect(number2String(160, {
      currency: false
    })).to.equal('сто шістдесят цілих нуль сотих');
  });

  it('should display correct value for 171', function () {
    expect(number2String(171, {
      currency: false
    })).to.equal('сто сімдесят одна ціла нуль сотих');
  });

  it('should display correct value for 182', function () {
    expect(number2String(182, {
      currency: false
    })).to.equal('сто вісімдесят дві цілих нуль сотих');
  });

  it('should display correct value for 195', function () {
    expect(number2String(195, {
      currency: false
    })).to.equal('сто дев\'яносто п\'ять цілих нуль сотих');
  });

  it('should display correct value for 1000', function () {
    expect(number2String(1000, {
      currency: false
    })).to.equal('одна тисяча цілих нуль сотих');
  });

  it('should display correct value for 1001', function () {
    expect(number2String(1001, {
      currency: false
    })).to.equal('одна тисяча одна ціла нуль сотих');
  });

  it('should display correct value for 1002', function () {
    expect(number2String(1002, {
      currency: false
    })).to.equal('одна тисяча дві цілих нуль сотих');
  });

  it('should display correct value for 1005', function () {
    expect(number2String(1005, {
      currency: false
    })).to.equal('одна тисяча п\'ять цілих нуль сотих');
  });

  it('should display correct value for 1011', function () {
    expect(number2String(1011, {
      currency: false
    })).to.equal('одна тисяча одинадцять цілих нуль сотих');
  });

  it('should display correct value for 1020', function () {
    expect(number2String(1020, {
      currency: false
    })).to.equal('одна тисяча двадцять цілих нуль сотих');
  });

  it('should display correct value for 1031', function () {
    expect(number2String(1031, {
      currency: false
    })).to.equal('одна тисяча тридцять одна ціла нуль сотих');
  });

  it('should display correct value for 1042', function () {
    expect(number2String(1042, {
      currency: false
    })).to.equal('одна тисяча сорок дві цілих нуль сотих');
  });

  it('should display correct value for 1055', function () {
    expect(number2String(1055, {
      currency: false
    })).to.equal('одна тисяча п\'ятдесят п\'ять цілих нуль сотих');
  });

  it('should display correct value for 1101', function () {
    expect(number2String(1101, {
      currency: false
    })).to.equal('одна тисяча сто одна ціла нуль сотих');
  });

  it('should display correct value for 1111', function () {
    expect(number2String(1111, {
      currency: false
    })).to.equal('одна тисяча сто одинадцять цілих нуль сотих');
  });

  it('should display correct value for 1221', function () {
    expect(number2String(1221, {
      currency: false
    })).to.equal('одна тисяча двісті двадцять одна ціла нуль сотих');
  });

  it('should display correct value for 2352', function () {
    expect(number2String(2352, {
      currency: false
    })).to.equal('дві тисячі триста п\'ятдесят дві цілих нуль сотих');
  });

  it('should display correct value for 3465', function () {
    expect(number2String(3465, {
      currency: false
    })).to.equal('три тисячі чотириста шістдесят п\'ять цілих нуль сотих');
  });

  it('should display correct value for 4571', function () {
    expect(number2String(4571, {
      currency: false
    })).to.equal('чотири тисячі п\'ятсот сімдесят одна ціла нуль сотих');
  });

  it('should display correct value for 5682', function () {
    expect(number2String(5682, {
      currency: false
    })).to.equal('п\'ять тисяч шістсот вісімдесят дві цілих нуль сотих');
  });

  it('should display correct value for 6795', function () {
    expect(number2String(6795, {
      currency: false
    })).to.equal('шість тисяч сімсот дев\'яносто п\'ять цілих нуль сотих');
  });

  it('should display correct value for 9999', function () {
    expect(number2String(9999, {
      currency: false
    })).to.equal('дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять цілих нуль сотих');
  });

  it('should display correct value for 10001', function () {
    expect(number2String(10001, {
      currency: false
    })).to.equal('десять тисяч одна ціла нуль сотих');
  });

  it('should display correct value for 11012', function () {
    expect(number2String(11012, {
      currency: false
    })).to.equal('одинадцять тисяч дванадцять цілих нуль сотих');
  });

  it('should display correct value for 25304', function () {
    expect(number2String(25304, {
      currency: false
    })).to.equal('двадцять п\'ять тисяч триста чотири цілих нуль сотих');
  });

  it('should display correct value for 37549', function () {
    expect(number2String(37549, {
      currency: false
    })).to.equal('тридцять сім тисяч п\'ятсот сорок дев\'ять цілих нуль сотих');
  });

  it('should display correct value for 68891', function () {
    expect(number2String(68891, {
      currency: false
    })).to.equal('шістдесят вісім тисяч вісімсот дев\'яносто одна ціла нуль сотих');
  });

  it('should display correct value for 99999', function () {
    expect(number2String(99999, {
      currency: false
    })).to.equal('дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять цілих нуль сотих');
  });

  it('should display correct value for 149201', function () {
    expect(number2String(149201, {
      currency: false
    })).to.equal('сто сорок дев\'ять тисяч двісті одна ціла нуль сотих');
  });

  it('should display correct value for 1352911', function () {
    expect(number2String(1352911, {
      currency: false
    })).to.equal('один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих нуль сотих');
  });

  it('should display correct value for 2352911', function () {
    expect(number2String(2352911, {
      currency: false
    })).to.equal('два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих нуль сотих');
  });

  it('should display correct value for 5352911', function () {
    expect(number2String(5352911, {
      currency: false
    })).to.equal('п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих нуль сотих');
  });

  it('should display correct value for 24352911.41', function () {
    expect(number2String(24352911.41, {
      currency: false
    })).to.equal('двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих сорок одна сота');
  });

  it('should display correct value for 101352911.52', function () {
    expect(number2String(101352911.52, {
      currency: false
    })).to.equal('сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих п\'ятдесят дві сотих');
  });

  it('should display correct value for 11352911.75', function () {
    expect(number2String(347352911.75, {
      currency: false
    })).to.equal('триста сорок сім мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять цілих сімдесят п\'ять сотих');
  });
});
