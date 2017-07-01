var isNumberRegex = /^\d+$/;

/**
 * @module document
 * Returns whether a string is only numbers
 * @param {string} str value to be evaluated.
 * @returns {boolean} isValid
 * @private
 */
var _isOnlyNumbers = function (str) {
  return isNumberRegex.test(str);
};

/**
 * @module document
 * Returns whether a DNI (Documento Nacional de Identidad) is valid.
 * @param {string} dni
 * @returns {boolean} isValid
 */
var isValidDni = function (dni) {
  var dniString = dni.toString();
  return dniString.length >= 7 && dniString.length <= 8 && _isOnlyNumbers(dniString);
};

/**
 * @module document
 * Returns whether a CI (Cedula de Identidad) is valid.
 * @param {string} ci
 * @returns {boolean} isValid
 */
var isValidCi = function (ci) {
  var ciString = ci.toString();
  return (ciString.length >= 1 && ciString.length <= 9);
};

/**
 * @module document
 * Returns whether a lc (Licencia de Conducir) is valid.
 * @param {string} lc
 * @returns {boolean} isValid
 */
var isValidLc = function (lc) {
  var lcString = lc.toString();
  return (lcString.length >= 6 && lcString.length <= 7);
};

/**
 * @module document
 * Returns whether a LE (Libreta de Enrolamiento) is valid.
 * @param {string} le
 * @returns {boolean} isValid
 */
var isValidLe = function (le) {
  var leString = le.toString();
  return (leString.length >= 6 && leString.length <= 7);
};

module.exports = {
  isValidDni: isValidDni,
  isValidCi: isValidCi,
  isValidLc: isValidLc,
  isValidLe: isValidLe
};
