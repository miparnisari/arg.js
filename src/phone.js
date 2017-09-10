/**
 * @module phone
 */

var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var PNF = require('google-libphonenumber').PhoneNumberFormat;

/**
 * @description Cleans a phone number
 * @example returns +5491156623011 for 1556623011
 * @param {string} targetPhone phone number
 * @param {string} areaCode area code, default is 11
 * @returns {string} Cleaned phone number
 */
var clean = function (targetPhone, areaCode) {
  defaultCountry = 'AR';
  areaCode = areaCode || '11';

  var tel;
  try {
    tel = phoneUtil.parse(targetPhone, defaultCountry);
    if (tel.getCountryCode() == '54') {
      var national = tel.getNationalNumber().toString();
      console.log("National: " + national)
      if (national.length < 10) {
        if (areaCode) {
          return clean(areaCode + national, 'AR');
        }
        else
          throw "Unkown area code for " + targetPhone
      }
      else if (national[0] != '9') {
        return clean('+549' + national, 'AR');
      }
    }
  }
  catch (e) {
    throw "Can't parse number " + targetPhone + ": " + e
  }

  if (tel) {
    return phoneUtil.format(tel, PNF.E164);
  }
  else {
    throw "Unkown error."
  }
};

module.exports = {
  clean: clean
};
