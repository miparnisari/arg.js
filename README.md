arg.js
===

![npm-version](https://img.shields.io/npm/v/arg.js.svg)
![build-status](https://travis-ci.org/miparnisari/arg.js.svg?branch=master)
![download-count](https://img.shields.io/npm/dm/arg.js.svg)
![dev-deps](https://david-dm.org/miparnisari/arg.js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/miparnisari/arg.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/miparnisari/arg.js?targetFile=package.json)

This is a JavaScript library that provides utility functions to do validations of Argentinian's document numbers, identification numbers and phones.

## Installation

1. Install nodejs (https://nodejs.org/en/download/).
1. Run `npm install --save arg.js`.

## Usage

  ```javascript
  // CBUs identify a bank account
  var cbu = require('arg.js').cbu;
  var valid = cbu.isValid('123'); // false

  // CUITs identify a person or a company
  var cuit = require('arg.js').cuit;
  var valid = cuit.isValid('27361705039'); //true

  // DNIs identify a person (including a foreigner living in Argentina)
  var doc = require('arg.js').document;
  var validDni = doc.isValidDni('36111222'); //true

  // Phones will be returned with the country and area code
  var phones = require('arg.js').phone;
  var cleanPhone = phones.clean('1556623011', '11'); //+5491156623011
  ```

## Build & tests & documentation

PRs are welcome!

1. To run the tests run `npm test`.
1. To build the documentation run `gulp doc`.
1. To view the documentation go to `docs/gen/index.html`.