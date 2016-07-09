arg.js
===

![npm-version](https://img.shields.io/npm/v/arg.js.svg)
![build-status](https://travis-ci.org/miparnisari/arg.js.svg?branch=master)
![download-count](https://img.shields.io/npm/dm/arg.js.svg)
![dev-deps](https://david-dm.org/miparnisari/arg.js.svg)

Utility functions for Argentina-related stuff (banks, IDs, phones, etc.)

## Installation

1. Install nodejs (https://nodejs.org/en/download/).
1. Run `npm install --save arg.js`.

## Build & tests & documentation

1. To run the tests run `gulp test`.
1. To build the documentation run `gulp doc`.
1. To view the documentation go to `docs/gen/index.html`.

## Usage

  ```javascript
  var cbu = require('arg.js').cbu;
  var valid = cbu.isValid('123'); // false

  var doc = require('arg.js).document;
  var validDni = doc.isValidDni('36111222'); //true
  ```