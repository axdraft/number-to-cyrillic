[![NPM](https://nodei.co/npm/number-to-cyrillic.png)](https://www.npmjs.com/package/number-to-cyrillic)

# Number To Cyrillic

Converts number to cyrillic.
This library supports only Ukrainian language so far.

## Install

`npm install number-to-cyrillic`

## API

### `.convert(number[, options])`

Converts an integer into a string. Optionally You can decide whether to display output with currency or not
by adding an object with property `currency: false`. By default, this property is set to `true`.

```js
var numberToString = require('number-to-cyrillic');

numberToString.convert(21);
// “Двадцять одна гривня”
```

## Change Log

### 1.0.*

- Improve test coverage

### 1.0.1

- Initial release

## Roadmap

### *version 1*

#### 1.0.*

- Ability to convert numbers to string either like currency or just like plain number

#### 1.1.*

- Add the abbility to make the first letter in uppercase by choise of the user

#### 1.2.*

- Extended support of decimal numbers till 0.000001

#### 1.3.*

- Add suport of other popular currencies (USD, EUR, GBP, RUB)

### *version 2*

#### 2.0.*

- Ability to convert date to string (DD.MM.YYYY and DD.MM along with MM.YYYY)

#### 2.1.*

- Add English language support for all of the library's functions

#### 2.2.*

- Add Russian language support for all of the library's functions

