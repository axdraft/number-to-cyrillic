var expect = require('chai').expect;
var number2String = require('../index').convert;

describe('Test all test-cases with default options', function () {

    it('should display correct value for 0', function () {
        expect(number2String(0)).to.deep.equal({
            convertedInteger: 'нуль',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 0', function () {
        expect(number2String(2300000)).to.deep.equal({
            convertedInteger: 'два мільйони триста тисяч',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 0', function () {
        expect(number2String(20109029)).to.deep.equal({
            convertedInteger: "двадцять мільйонів сто дев'ять тисяч двадцять дев'ять",
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1', function () {
        expect(number2String(1)).to.deep.equal({
            convertedInteger: 'одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 2', function () {
        expect(number2String(2)).to.deep.equal({
            convertedInteger: 'дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 5', function () {
        expect(number2String(5)).to.deep.equal({
            convertedInteger: 'п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 11', function () {
        expect(number2String(11)).to.deep.equal({
            convertedInteger: 'одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 20', function () {
        expect(number2String(20)).to.deep.equal({
            convertedInteger: 'двадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 21', function () {
        expect(number2String(21)).to.deep.equal({
            convertedInteger: 'двадцять одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 22', function () {
        expect(number2String(22)).to.deep.equal({
            convertedInteger: 'двадцять дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 25', function () {
        expect(number2String(25)).to.deep.equal({
            convertedInteger: 'двадцять п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 30', function () {
        expect(number2String(30)).to.deep.equal({
            convertedInteger: 'тридцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 41', function () {
        expect(number2String(41)).to.deep.equal({
            convertedInteger: 'сорок одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 52', function () {
        expect(number2String(52)).to.deep.equal({
            convertedInteger: 'п\'ятдесят дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 65', function () {
        expect(number2String(65)).to.deep.equal({
            convertedInteger: 'шістдесят п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 70', function () {
        expect(number2String(70)).to.deep.equal({
            convertedInteger: 'сімдесят',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 81', function () {
        expect(number2String(81)).to.deep.equal({
            convertedInteger: 'вісімдесят одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 92', function () {
        expect(number2String(92)).to.deep.equal({
            convertedInteger: 'дев\'яносто дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 100', function () {
        expect(number2String(100)).to.deep.equal({
            convertedInteger: 'сто',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 101', function () {
        expect(number2String(101)).to.deep.equal({
            convertedInteger: 'сто одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 102', function () {
        expect(number2String(102)).to.deep.equal({
            convertedInteger: 'сто дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 105', function () {
        expect(number2String(105)).to.deep.equal({
            convertedInteger: 'сто п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 110', function () {
        expect(number2String(110)).to.deep.equal({
            convertedInteger: 'сто десять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 111', function () {
        expect(number2String(111)).to.deep.equal({
            convertedInteger: 'сто одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 120', function () {
        expect(number2String(120)).to.deep.equal({
            convertedInteger: 'сто двадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 131', function () {
        expect(number2String(131)).to.deep.equal({
            convertedInteger: 'сто тридцять одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 142', function () {
        expect(number2String(142)).to.deep.equal({
            convertedInteger: 'сто сорок дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 155', function () {
        expect(number2String(155)).to.deep.equal({
            convertedInteger: 'сто п\'ятдесят п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 160', function () {
        expect(number2String(160)).to.deep.equal({
            convertedInteger: 'сто шістдесят',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 171', function () {
        expect(number2String(171)).to.deep.equal({
            convertedInteger: 'сто сімдесят одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 182', function () {
        expect(number2String(182)).to.deep.equal({
            convertedInteger: 'сто вісімдесят дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 195', function () {
        expect(number2String(195)).to.deep.equal({
            convertedInteger: 'сто дев\'яносто п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1000', function () {
        expect(number2String(1000)).to.deep.equal({
            convertedInteger: 'одна тисяча',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1001', function () {
        expect(number2String(1001)).to.deep.equal({
            convertedInteger: 'одна тисяча одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 1002', function () {
        expect(number2String(1002)).to.deep.equal({
            convertedInteger: 'одна тисяча дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 1005', function () {
        expect(number2String(1005)).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1011', function () {
        expect(number2String(1011)).to.deep.equal({
            convertedInteger: 'одна тисяча одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1020', function () {
        expect(number2String(1020)).to.deep.equal({
            convertedInteger: 'одна тисяча двадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1031', function () {
        expect(number2String(1031)).to.deep.equal({
            convertedInteger: 'одна тисяча тридцять одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 1042', function () {
        expect(number2String(1042)).to.deep.equal({
            convertedInteger: 'одна тисяча сорок дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 1055', function () {
        expect(number2String(1055)).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ятдесят п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1101', function () {
        expect(number2String(1101)).to.deep.equal({
            convertedInteger: 'одна тисяча сто одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 1111', function () {
        expect(number2String(1111)).to.deep.equal({
            convertedInteger: 'одна тисяча сто одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1221', function () {
        expect(number2String(1221)).to.deep.equal({
            convertedInteger: 'одна тисяча двісті двадцять одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 2352', function () {
        expect(number2String(2352)).to.deep.equal({
            convertedInteger: 'дві тисячі триста п\'ятдесят дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 3465', function () {
        expect(number2String(3465)).to.deep.equal({
            convertedInteger: 'три тисячі чотириста шістдесят п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 4571', function () {
        expect(number2String(4571)).to.deep.equal({
            convertedInteger: 'чотири тисячі п\'ятсот сімдесят одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 5682', function () {
        expect(number2String(5682)).to.deep.equal({
            convertedInteger: 'п\'ять тисяч шістсот вісімдесят дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 6795', function () {
        expect(number2String(6795)).to.deep.equal({
            convertedInteger: 'шість тисяч сімсот дев\'яносто п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 9999', function () {
        expect(number2String(9999)).to.deep.equal({
            convertedInteger: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 10001', function () {
        expect(number2String(10001)).to.deep.equal({
            convertedInteger: 'десять тисяч одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 11012', function () {
        expect(number2String(11012)).to.deep.equal({
            convertedInteger: 'одинадцять тисяч дванадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 25304', function () {
        expect(number2String(25304)).to.deep.equal({
            convertedInteger: 'двадцять п\'ять тисяч триста чотири',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 37549', function () {
        expect(number2String(37549)).to.deep.equal({
            convertedInteger: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 68891', function () {
        expect(number2String(68891)).to.deep.equal({
            convertedInteger: 'шістдесят вісім тисяч вісімсот дев\'яносто одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 99999', function () {
        expect(number2String(99999)).to.deep.equal({
            convertedInteger: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 149201', function () {
        expect(number2String(149201)).to.deep.equal({
            convertedInteger: 'сто сорок дев\'ять тисяч двісті одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 1352911', function () {
        expect(number2String(1352911)).to.deep.equal({
            convertedInteger: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 2352911', function () {
        expect(number2String(2352911)).to.deep.equal({
            convertedInteger: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 5352911', function () {
        expect(number2String(5352911)).to.deep.equal({
            convertedInteger: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 24352911', function () {
        expect(number2String(24352911)).to.deep.equal({
            convertedInteger: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 101352911', function () {
        expect(number2String(101352911)).to.deep.equal({
            convertedInteger: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 11352911', function () {
        expect(number2String(11352911)).to.deep.equal({
            convertedInteger: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1000000', function () {
        expect(number2String(1000000)).to.deep.equal({
            convertedInteger: 'один мільйон',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 230000', function () {
        expect(number2String(230000)).to.deep.equal({
            convertedInteger: 'двісті тридцять тисяч',
            integerCurrency: 'гривень'
        });
    });
});

describe('Test all test-cases with currency usd', function () {
    it('should display correct value for 0', function () {
        expect(number2String(0, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'нуль',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1', function () {
        expect(number2String(1, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 2', function () {
        expect(number2String(2, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 5', function () {
        expect(number2String(5, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 11', function () {
        expect(number2String(11, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 20', function () {
        expect(number2String(20, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 21', function () {
        expect(number2String(21, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 22', function () {
        expect(number2String(22, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 25', function () {
        expect(number2String(25, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 30', function () {
        expect(number2String(30, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'тридцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 41', function () {
        expect(number2String(41, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сорок один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 52', function () {
        expect(number2String(52, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'п\'ятдесят два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 65', function () {
        expect(number2String(65, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'шістдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 70', function () {
        expect(number2String(70, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сімдесят',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 81', function () {
        expect(number2String(81, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'вісімдесят один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 92', function () {
        expect(number2String(92, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'дев\'яносто два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 100', function () {
        expect(number2String(100, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 101', function () {
        expect(number2String(101, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 102', function () {
        expect(number2String(102, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 105', function () {
        expect(number2String(105, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 110', function () {
        expect(number2String(110, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто десять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 111', function () {
        expect(number2String(111, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 120', function () {
        expect(number2String(120, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто двадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 131', function () {
        expect(number2String(131, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто тридцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 142', function () {
        expect(number2String(142, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто сорок два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 155', function () {
        expect(number2String(155, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто п\'ятдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 160', function () {
        expect(number2String(160, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто шістдесят',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 171', function () {
        expect(number2String(171, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто сімдесят один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 182', function () {
        expect(number2String(182, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто вісімдесят два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 195', function () {
        expect(number2String(195, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто дев\'яносто п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1000', function () {
        expect(number2String(1000, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1001', function () {
        expect(number2String(1001, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1002', function () {
        expect(number2String(1002, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 1005', function () {
        expect(number2String(1005, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1011', function () {
        expect(number2String(1011, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1020', function () {
        expect(number2String(1020, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча двадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1031', function () {
        expect(number2String(1031, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча тридцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1042', function () {
        expect(number2String(1042, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сорок два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 1055', function () {
        expect(number2String(1055, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ятдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1101', function () {
        expect(number2String(1101, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сто один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1111', function () {
        expect(number2String(1111, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сто одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1221', function () {
        expect(number2String(1221, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча двісті двадцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 2352', function () {
        expect(number2String(2352, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'дві тисячі триста п\'ятдесят два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 3465', function () {
        expect(number2String(3465, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'три тисячі чотириста шістдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 4571', function () {
        expect(number2String(4571, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'чотири тисячі п\'ятсот сімдесят один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 5682', function () {
        expect(number2String(5682, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'п\'ять тисяч шістсот вісімдесят два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 6795', function () {
        expect(number2String(6795, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'шість тисяч сімсот дев\'яносто п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 9999', function () {
        expect(number2String(9999, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 10001', function () {
        expect(number2String(10001, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'десять тисяч один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 11012', function () {
        expect(number2String(11012, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одинадцять тисяч дванадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 25304', function () {
        expect(number2String(25304, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять п\'ять тисяч триста чотири',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 37549', function () {
        expect(number2String(37549, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 68891', function () {
        expect(number2String(68891, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'шістдесят вісім тисяч вісімсот дев\'яносто один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 99999', function () {
        expect(number2String(99999, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 149201', function () {
        expect(number2String(149201, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто сорок дев\'ять тисяч двісті один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1352911', function () {
        expect(number2String(1352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 2352911', function () {
        expect(number2String(2352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 5352911', function () {
        expect(number2String(5352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 24352911', function () {
        expect(number2String(24352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 101352911', function () {
        expect(number2String(101352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 11352911', function () {
        expect(number2String(11352911, {
            currency: 'usd'
        })).to.deep.equal({
            convertedInteger: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'доларів США'
        });
    });
});

describe('Test all test-cases with currency eur', function () {

    it('should display correct value for 0', function () {
        expect(number2String(0, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'нуль',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1', function () {
        expect(number2String(1, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 2', function () {
        expect(number2String(2, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 5', function () {
        expect(number2String(5, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 11', function () {
        expect(number2String(11, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 20', function () {
        expect(number2String(20, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 21', function () {
        expect(number2String(21, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 22', function () {
        expect(number2String(22, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 25', function () {
        expect(number2String(25, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 30', function () {
        expect(number2String(30, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'тридцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 41', function () {
        expect(number2String(41, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сорок один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 52', function () {
        expect(number2String(52, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'п\'ятдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 65', function () {
        expect(number2String(65, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'шістдесят п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 70', function () {
        expect(number2String(70, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сімдесят',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 81', function () {
        expect(number2String(81, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'вісімдесят один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 92', function () {
        expect(number2String(92, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'дев\'яносто два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 100', function () {
        expect(number2String(100, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 101', function () {
        expect(number2String(101, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 102', function () {
        expect(number2String(102, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 105', function () {
        expect(number2String(105, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 110', function () {
        expect(number2String(110, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто десять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 111', function () {
        expect(number2String(111, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 120', function () {
        expect(number2String(120, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто двадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 131', function () {
        expect(number2String(131, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто тридцять один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 142', function () {
        expect(number2String(142, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто сорок два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 155', function () {
        expect(number2String(155, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто п\'ятдесят п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 160', function () {
        expect(number2String(160, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто шістдесят',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 171', function () {
        expect(number2String(171, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто сімдесят один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 182', function () {
        expect(number2String(182, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто вісімдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 195', function () {
        expect(number2String(195, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто дев\'яносто п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1000', function () {
        expect(number2String(1000, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1001', function () {
        expect(number2String(1001, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1002', function () {
        expect(number2String(1002, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1005', function () {
        expect(number2String(1005, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1011', function () {
        expect(number2String(1011, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1020', function () {
        expect(number2String(1020, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча двадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1031', function () {
        expect(number2String(1031, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча тридцять один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1042', function () {
        expect(number2String(1042, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сорок два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1055', function () {
        expect(number2String(1055, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча п\'ятдесят п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1101', function () {
        expect(number2String(1101, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сто один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1111', function () {
        expect(number2String(1111, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча сто одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1221', function () {
        expect(number2String(1221, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одна тисяча двісті двадцять один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 2352', function () {
        expect(number2String(2352, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'дві тисячі триста п\'ятдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 3465', function () {
        expect(number2String(3465, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'три тисячі чотириста шістдесят п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 4571', function () {
        expect(number2String(4571, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'чотири тисячі п\'ятсот сімдесят один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 5682', function () {
        expect(number2String(5682, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'п\'ять тисяч шістсот вісімдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 6795', function () {
        expect(number2String(6795, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'шість тисяч сімсот дев\'яносто п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 9999', function () {
        expect(number2String(9999, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 10001', function () {
        expect(number2String(10001, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'десять тисяч один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 11012', function () {
        expect(number2String(11012, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одинадцять тисяч дванадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 25304', function () {
        expect(number2String(25304, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять п\'ять тисяч триста чотири',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 37549', function () {
        expect(number2String(37549, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'тридцять сім тисяч п\'ятсот сорок дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 68891', function () {
        expect(number2String(68891, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'шістдесят вісім тисяч вісімсот дев\'яносто один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 99999', function () {
        expect(number2String(99999, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 149201', function () {
        expect(number2String(149201, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто сорок дев\'ять тисяч двісті один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1352911', function () {
        expect(number2String(1352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 2352911', function () {
        expect(number2String(2352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 5352911', function () {
        expect(number2String(5352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'п\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 24352911', function () {
        expect(number2String(24352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 101352911', function () {
        expect(number2String(101352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 11352911', function () {
        expect(number2String(11352911, {
            currency: 'eur'
        })).to.deep.equal({
            convertedInteger: 'одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });
});

describe('Test all test-cases with capital letter', function () {

    it('should display correct value for 0', function () {
        expect(number2String(0, {
            currency: 'uah',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Нуль',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 1', function () {
        expect(number2String(1, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 2', function () {
        expect(number2String(2, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 5', function () {
        expect(number2String(5, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'П\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 11', function () {
        expect(number2String(11, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Одинадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 20', function () {
        expect(number2String(20, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Двадцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 21', function () {
        expect(number2String(21, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Двадцять одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 22', function () {
        expect(number2String(22, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Двадцять дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 25', function () {
        expect(number2String(25, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Двадцять п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 30', function () {
        expect(number2String(30, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Тридцять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 41', function () {
        expect(number2String(41, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сорок одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 52', function () {
        expect(number2String(52, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'П\'ятдесят дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 65', function () {
        expect(number2String(65, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Шістдесят п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 70', function () {
        expect(number2String(70, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сімдесят',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 81', function () {
        expect(number2String(81, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Вісімдесят одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 92', function () {
        expect(number2String(92, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Дев\'яносто дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 100', function () {
        expect(number2String(100, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сто',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 101', function () {
        expect(number2String(101, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сто одна',
            integerCurrency: 'гривня'
        });
    });

    it('should display correct value for 102', function () {
        expect(number2String(102, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сто дві',
            integerCurrency: 'гривні'
        });
    });

    it('should display correct value for 105', function () {
        expect(number2String(105, {
            currency: 'uah',
            capitalize: true,
        })).to.deep.equal({
            convertedInteger: 'Сто п\'ять',
            integerCurrency: 'гривень'
        });
    });

    it('should display correct value for 110', function () {
        expect(number2String(110, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто десять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 111', function () {
        expect(number2String(111, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 120', function () {
        expect(number2String(120, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто двадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 131', function () {
        expect(number2String(131, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто тридцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 142', function () {
        expect(number2String(142, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто сорок два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 155', function () {
        expect(number2String(155, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто п\'ятдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 160', function () {
        expect(number2String(160, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто шістдесят',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 171', function () {
        expect(number2String(171, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто сімдесят один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 182', function () {
        expect(number2String(182, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто вісімдесят два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 195', function () {
        expect(number2String(195, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто дев\'яносто п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1000', function () {
        expect(number2String(1000, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1001', function () {
        expect(number2String(1001, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1002', function () {
        expect(number2String(1002, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 1005', function () {
        expect(number2String(1005, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1011', function () {
        expect(number2String(1011, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча одинадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1020', function () {
        expect(number2String(1020, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча двадцять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1031', function () {
        expect(number2String(1031, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча тридцять один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1042', function () {
        expect(number2String(1042, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча сорок два',
            integerCurrency: 'долари США'
        });
    });

    it('should display correct value for 1055', function () {
        expect(number2String(1055, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча п\'ятдесят п\'ять',
            integerCurrency: 'доларів США'
        });
    });

    it('should display correct value for 1101', function () {
        expect(number2String(1101, {
            currency: 'usd',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча сто один',
            integerCurrency: 'долар США'
        });
    });

    it('should display correct value for 1111', function () {
        expect(number2String(1111, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча сто одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1221', function () {
        expect(number2String(1221, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одна тисяча двісті двадцять один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 2352', function () {
        expect(number2String(2352, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Дві тисячі триста п\'ятдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 3465', function () {
        expect(number2String(3465, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Три тисячі чотириста шістдесят п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 4571', function () {
        expect(number2String(4571, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Чотири тисячі п\'ятсот сімдесят один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 5682', function () {
        expect(number2String(5682, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'П\'ять тисяч шістсот вісімдесят два',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 6795', function () {
        expect(number2String(6795, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Шість тисяч сімсот дев\'яносто п\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 9999', function () {
        expect(number2String(9999, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 10001', function () {
        expect(number2String(10001, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Десять тисяч один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 11012', function () {
        expect(number2String(11012, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одинадцять тисяч дванадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 25304', function () {
        expect(number2String(25304, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Двадцять п\'ять тисяч триста чотири',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 37549', function () {
        expect(number2String(37549, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Тридцять сім тисяч п\'ятсот сорок дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 68891', function () {
        expect(number2String(68891, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Шістдесят вісім тисяч вісімсот дев\'яносто один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 99999', function () {
        expect(number2String(99999, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Дев\'яносто дев\'ять тисяч дев\'ятсот дев\'яносто дев\'ять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 149201', function () {
        expect(number2String(149201, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто сорок дев\'ять тисяч двісті один',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 1352911', function () {
        expect(number2String(1352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 2352911', function () {
        expect(number2String(2352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Два мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 5352911', function () {
        expect(number2String(5352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'П\'ять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 24352911', function () {
        expect(number2String(24352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Двадцять чотири мільйони триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 101352911', function () {
        expect(number2String(101352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Сто один мільйон триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });

    it('should display correct value for 11352911', function () {
        expect(number2String(11352911, {
            currency: 'eur',
            capitalize: true
        })).to.deep.equal({
            convertedInteger: 'Одинадцять мільйонів триста п\'ятдесят дві тисячі дев\'ятсот одинадцять',
            integerCurrency: 'євро'
        });
    });
});
