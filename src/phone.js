var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var PNF = require('google-libphonenumber').PhoneNumberFormat;

/**
 * @module phone
 * Cleans a phone number
 * @example returns +5491156623011 or returns false when invalid number
 * @param {string} target phone number
 * @param {string} country code
 * @param {string} user phone number
 * @returns {string|boolean} Cleaned phone number or 'false' when invalid number
 */
var clean = function(targetPhone, defaultCountry, userPhone) {
  defaultCountry = defaultCountry || 'AR';
  userPhone = userPhone || '+5491156623011';

  var valid;
  var tel;
  try{
    tel = phoneUtil.parse(targetPhone, defaultCountry);
    if (tel.getCountryCode() == '54'){
      var national = tel.getNationalNumber().toString();
      //no area code, extract from user
      if (national.length < 10) {
        if (userPhone) {
          var mix = userPhone.substr(0, userPhone.length - national.length) + national;
          return clean(mix, 'AR');
        }
        else
          return false;
      }
      else if (national[0] != '9'){
        return clean('+549'+national, 'AR');
      }
    }
  }
  catch(e2){
    console.log('can\'t parse number:'+targetPhone + e2);
    return false;
  }

  if(tel){
    var p = phoneUtil.format(tel, PNF.E164);
    return p
  }
  else
    return false;
};

module.exports = {
  clean: clean
};
