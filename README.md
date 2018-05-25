[![NPM](https://nodei.co/npm/number-to-cyrillic.png)](https://www.npmjs.com/package/number-to-cyrillic)

# Number To Cyrillic

[![npm version](https://badge.fury.io/js/number-to-cyrillic.svg)](https://badge.fury.io/js/number-to-cyrillic)

Converts number to cyrillic.
This library supports only Ukrainian language so far.

## Install

`npm install number-to-cyrillic`

## API

### `.convert(number[, options])`

Converts an integer into a string. Optionally you can decide whether to display output with currency or not
by adding an object with property `currency: false`. For example:

```js
var numberToString = require('number-to-cyrillic');

numberToString.convert(21);
// “двадцять одна гривня нуль копійок”

numberToString.convert(34.52, {
  currency: false
});
// "тридцять чотири цілих п'ятдесят дві сотих"

numberToString.convert(76.20, {
  capitalize: true
});
// "Сімдесят шість гривень двадцять копійок"
```

See detailed description of all available options below:

| Option  | Default Value  | Description  |
|:-------:|:--------------:|--------------|
| currency| **true**       |By setting a value for this option to `false` you might remove displaying currency name beside the number
|capitalize| **false** | By setting a value for this option to `true` you might make the first letter in uppercase 

## Change Log

### 1.2.0

- Ability to make the first letter in uppercase

### 1.1.0

- Ability to convert numbers to string either like currency or just like plain number by adding an option
- Update README.md with ROADMAP and options description
- Add more tests

### 1.0.*

- Improve test coverage

### 1.0.1

- Initial release

## Roadmap

#### 1.2.*

- Add the abbility to make the first letter in uppercase by choise of the user

#### 1.3.*

- Extended support of decimal numbers till 0.000001

#### 1.4.*

- Add suport of other popular currencies (USD, EUR, GBP, RUB)

#### 2.0.*

- Ability to convert date to string (DD.MM.YYYY and DD.MM along with MM.YYYY)

#### 2.1.*

- Add English language support for all of the library's functions

#### 2.2.*

- Add Russian language support for all of the library's functions

