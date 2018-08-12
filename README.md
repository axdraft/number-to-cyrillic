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
// "двадцять одна гривня нуль копійок"

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
