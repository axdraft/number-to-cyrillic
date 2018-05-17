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
});