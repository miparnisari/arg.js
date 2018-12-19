/**
 * @module cuit
 */

 var _isLengthOk = function(cuit) {
    return (!!cuit && cuit.length == 11);
};

var _isTypeOk = function(cuit) {
  if (!cuit || !cuit.substr) return false
  var code = parseInt(cuit.substr(0, 2), 10);
  var validTypes = [20, 23, 24, 27, 30, 33, 34];
  return validTypes.indexOf(code) > -1;
};

var _checksumIsOk = function(sCUIT) {
    if (!sCUIT) return false
    var sCUIT = String(sCUIT);
    var aCUIT = sCUIT.split('');

    var aMult = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i <= 9; i++) {
        sum += aCUIT[i] * aMult[i];
    }

    var diff = 11 - (sum % 11);
    var checksum = aCUIT[10];

    if (diff == 11) diff = 0; // do not consider diff == 10

    return (diff == checksum);
}

/**
 * @description Returns whether a given CUIT or CUIL is valid
 * @param {string} cuit
 * @returns {boolean} isValid
 */
var isValid = function(cuit) {
  return _isLengthOk(cuit) && _isTypeOk(cuit) && _checksumIsOk(cuit);
};

module.exports = {
    _isLengthOk: _isLengthOk,
    _checksumIsOk: _checksumIsOk,
    _isTypeOk: _isTypeOk,
    isValid: isValid
};
