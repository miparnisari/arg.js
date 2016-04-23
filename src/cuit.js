var _isLengthOk = function(cuit) {
    return (cuit.length == 11);
};

var _isTypeOk = function(cuit) {
  var code = parseInt(cuit.substr(0, 2), 10);
  var validTypes = [20, 23, 24, 27, 30, 33, 34];
  return validTypes.indexOf(code) > -1;
};

var _checksumIsOk = function(sCUIT) {
    var sCUIT = String(sCUIT);
    var aCUIT = sCUIT.split('');

    var aMult = [6,7,8,9,4,5,6,7,8,9];
    var sum = 0;
    for (var i = 0; i <= 9; i++) {
        sum += aCUIT[i] * aMult[i];
    }
    sum = (sum % 11);

    var checksum = aCUIT[10];
    return (sum == checksum);
}

/**
 * @module cuit
 * Returns whether a given CUIT or CUIL is valid
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