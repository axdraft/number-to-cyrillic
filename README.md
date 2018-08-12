[![NPM](https://nodei.co/npm/number-to-cyrillic.png)](https://www.npmjs.com/package/number-to-cyrillic)

# Number To Cyrillic

[![npm version](https://badge.fury.io/js/number-to-cyrillic.svg)](https://badge.fury.io/js/number-to-cyrillic)

Converts number to cyrillic.
This library supports only Ukrainian language so far.

## Install

`npm install number-to-cyrillic`

## API

### `.convert(number[, options])`

Converts an integer into an object witch contain value and the currency name. Optionally you can decide whether to display output with currency or not, to display a capital letter for the value
by adding an object with some propertis. For example:

```js
var numberToString = require('number-to-cyrillic');

numberToString.convert(21);
// { value: "двадцять одна", currency: "гривня" }

numberToString.convert(34, {
  currentCurrency: 'usd'
});
// { value: "тридцять чотири", currency: "долари США" }

numberToString.convert(76, {
  capitalize: true
});
// { value: "Сімдесят шість", currency: "гривень" }
```

See detailed description of all available options below:

| Option  | Default Value  | Description  |
|:-------:|:--------------:|--------------|
| currency| **true**       |By setting a value for this option to `false` you might remove displaying currency name beside the number
|capitalize| **false** | By setting a value for this option to `true` you might make the first letter in uppercase 
|currentCurrency| **`'uah'`** | By setting a value to this option to `'usd'` or `'eur'` you'll get the output for selected currency name.
