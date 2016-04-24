arg.js
===

![build-status](https://travis-ci.org/miparnisari/arg.js.svg?branch=master)

Utility functions for Argentina-related stuff (banks, IDs, phones, etc.)

## Installation:

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
  ```