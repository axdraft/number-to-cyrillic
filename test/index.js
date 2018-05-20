var expect = require('chai').expect;
var number2String = require('../index').convert;

describe('Test all test-cases', function () {
  it('should throw an error when paste incorrect string', function () {
    try {
      number2String('string');
    } catch (error) {
      expect(error.message).to.equal('String should be a valid number!');
    }
  });

  it('should throw an error when paste an empty string', function () {
    try {
      number2String('');
    } catch (error) {
      expect(error.message).to.equal('String should be a valid number!');
    }
  });

  it('should display correct value for 0', function () {
     expect(number2String('0')).to.equal('Нуль гривень');
  });

  it('should display correct value for 1', function () {
    expect(number2String('1')).to.equal('Одна гривня');
  });

  it('should display correct value for 2', function () {
    expect(number2String('2')).to.eql('Дві гривні');
  });

  it('should display correct value for 5', function () {
    expect(number2String('5')).to.equal('П\'ять гривень');
  });

  it('should display correct value for 11', function () {
    expect(number2String('11')).to.equal('Одинадцять гривень');
  });

  it('should display correct value for 20', function () {
    expect(number2String('20')).to.equal('Двадцять гривень');
  });

  it('should display correct value for 21', function () {
    expect(number2String('21')).to.equal('Двадцять одна гривня');
  });

  it('should display correct value for 22', function () {
    expect(number2String('22')).to.eql('Двадцять дві гривні');
  });

  it('should display correct value for 25', function () {
    expect(number2String('25')).to.equal('Двадцять п\'ять гривень');
  });

  it('should display correct value for 30', function () {
    expect(number2String('30')).to.equal('Тридцять гривень');
  });

  it('should display correct value for 41', function () {
    expect(number2String('41')).to.equal('Сорок одна гривня');
  });

  it('should display correct value for 52', function () {
    expect(number2String('52')).to.eql('П\'ятдесят дві гривні');
  });

  it('should display correct value for 65', function () {
    expect(number2String('65')).to.have.string('Шістдесят п\'ять гривень');
  });

  it('should display correct value for 70', function () {
    expect(number2String('70')).to.have.string('Сімдесят гривень');
  });

  it('should display correct value for 81', function () {
    expect(number2String('81')).to.have.string('Вісімдесят одна гривня');
  });

  it('should display correct value for 92', function () {
    expect(number2String('92')).to.eql('Дев\'яносто дві гривні');
  });

  it('should display correct value for 100', function () {
    expect(number2String('100')).to.equal('Сто гривень');
  });

  it('should display correct value for 101', function () {
    expect(number2String('101')).to.equal('Сто одна гривня');
  });

  it('should display correct value for 102', function () {
    expect(number2String('102')).to.eql('Сто дві гривні');
  });

  it('should display correct value for 105', function () {
    expect(number2String('105')).to.equal('Сто п\'ять гривень');
  });

  it('should display correct value for 110', function () {
    expect(number2String('110')).to.eql('Cто десять гривень');
  });

  it('should display correct value for 111', function () {
    expect(number2String('111')).to.equal('Сто одинадцять гривень');
  });

  it('should display correct value for 120', function () {
    expect(number2String('120')).to.equal('Сто двадцять гривень');
  });

  it('should display correct value for 131', function () {
    expect(number2String('131')).to.equal('Сто тридцять одна гривня');
  });

  it('should display correct value for 142', function () {
    expect(number2String('142')).to.eql('Сто сорок дві гривні');
  });

  it('should display correct value for 155', function () {
    expect(number2String('155')).to.eql('Сто п\'ятдесят п\'ять гривень');
  });

  it('should display correct value for 160', function () {
    expect(number2String('160')).to.eql('Сто шістдесят гривень');
  });

  it('should display correct value for 171', function () {
    expect(number2String('171')).to.eql('Сто сімдесят одна гривня');
  });

  it('should display correct value for 182', function () {
    expect(number2String('182')).to.eql('Сто вісімдесят дві гривні');
  });

  it('should display correct value for 195', function () {
    expect(number2String('195')).to.eql('Сто дев\'яносто п\'ять гривень');
  });

  it('should display correct value for 1000', function () {
    expect(number2String('1000')).to.eql('Одна тисяча гривень');
  });

  it('should display correct value for 1001', function () {
    expect(number2String('1001')).to.eql('Одна тисяча одна гривня');
  });

  it('should display correct value for 1002', function () {
    expect(number2String('1002')).to.eql('Одна тисяча дві гривні');
  });

  it('should display correct value for 1005', function () {
    expect(number2String('1005')).to.eql('Одна тисяча п\'ять гривень');
  });

  it('should display correct value for 1011', function () {
    expect(number2String('1011')).to.eql('Одна тисяча одинадцять гривень');
  });

  it('should display correct value for 1020', function () {
    expect(number2String('1020')).to.eql('Одна тисяча двадцять гривень');
  });

  it('should display correct value for 1031', function () {
    expect(number2String('1031')).to.eql('Одна тисяча тридцять одна гривня');
  });

  it('should display correct value for 1042', function () {
    expect(number2String('1042')).to.eql('Одна тисяча сорок дві гривні');
  });

  it('should display correct value for 1055', function () {
    expect(number2String('1055')).to.eql('Одна тисяча п\'ятдесят п\'ять гривень');
  });

  it('should display correct value for 1101', function () {
    expect(number2String('1101')).to.eql('Одна тисяча сто одна гривня');
  });

  it('should display correct value for 1111', function () {
    expect(number2String('1111')).to.eql('Одна тисяча сто одинадцять гривень');
  });

  it('should display correct value for 1221', function () {
    expect(number2String('1221')).to.eql('Одна тисяча двісті двадцять одна гривня');
  });

  it('should display correct value for 2352', function () {
    expect(number2String('2352')).to.eql('Дві тисячі триста п\'ятдесят дві гривні');
  });

  it('should display correct value for 3465', function () {
    expect(number2String('3465')).to.eql('Три тисячі чотириста шістдесят п\'ять гривень');
  });

  it('should display correct value for 4571', function () {
    expect(number2String('4571')).to.eql('Чотири тисячі п\'ятсот сімдесят одна гривня');
  });

  it('should display correct value for 5682', function () {
    expect(number2String('5682')).to.eql('П\'ять тисяч шістсот вісімдесят дві гривні');
  });

  it('should display correct value for 6795', function () {
    expect(number2String('6795')).to.eql('Шість тисяч сімсот дев\'яносто п\'ять гривень');
  });

  it('should display correct value for 9999', function () {
    expect(number2String('9999')).to.eql('Дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять гривень');
  });

  it('should display correct value for 10001', function () {
    expect(number2String('10001')).to.eql('Десять тисяч одна гривня');
  });

  it('should display correct value for 11012', function () {
    expect(number2String('11012')).to.eql('Одинадцять тисяч дванадцять гривень');
  });

  it('should display correct value for 25304', function () {
    expect(number2String('25304')).to.eql('Двадцять п\'ять тисяч триста чотири гривні');
  });

  it('should display correct value for 37549', function () {
    expect(number2String('37549')).to.eql('Тридцять сім тисяч п\'ятсот сорок дев\'ять гривень');
  });

  it('should display correct value for 68891', function () {
    expect(number2String('68891')).to.eql('Шістдесят вісім тисяч вісімсот дев\'яносто одна гривня');
  });

  it('should display correct value for 99999', function () {
    expect(number2String('99999')).to.eql('Дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять гривень');
  });

  it('should display correct value for 149201', function () {
    expect(number2String('149201')).to.eql('Сто сорок дев\'ять тисяч двісті одна гривня');
  });

  it('should display correct value for 1352911', function () {
    expect(number2String('1352911')).to.eql('Один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень');
  });

  it('should display correct value for 2352911', function () {
    expect(number2String('2352911')).to.eql('Два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень');
  });

  it('should display correct value for 5352911', function () {
    expect(number2String('5352911')).to.eql('П\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень');
  });

  it('should display correct value for 24352911.41', function () {
    expect(number2String('24352911.41')).to.eql('Двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень сорок одна копійка');
  });

  it('should display correct value for 101352911.52', function () {
    expect(number2String('101352911.52')).to.eql('Сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень п\'ятдесят дві копійка');
  });

  it('should display correct value for 11352911.75', function () {
    expect(number2String('347352911.75')).to.eql('Триста сорок сім мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять гривень сімдесят п\'ять копійок');
  });
});