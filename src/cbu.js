/**
 * @module cbu
 */

 var _isLengthOk = function(cbu) {
    return (cbu && cbu.length == 22);
};

var _isValidAccount = function(acc) {
    if (!acc || acc.length !== 14) {
        return false;
    }

    var sum = acc[0] * 3 + acc[1] * 9 + acc[2] * 7 + acc[3] * 1 + acc[4] * 3 + acc[5] * 9 + acc[6] * 7 + acc[7] * 1 + acc[8] * 3 + acc[9] * 9 + acc[10] * 7 + acc[11] * 1 + acc[12] * 3;
    var diff = (10 - (sum % 10)) % 10; // the result of this should be only 1 digit
    var checksum = acc[13];

    return diff == checksum;
};

var _isValidBankCode = function(code) {
    if (!code || code.length !== 8) {
        return false;
    }
    var bank = code.substr(0, 3);
    var checksumOne = code[3];
    var branch = code.substr(4, 3);
    var checksumTwo = code[7];

    var sum = bank[0] * 7 + bank[1] * 1 + bank[2] * 3 + checksumOne * 9 + branch[0] * 7 + branch[1] * 1 + branch[2] * 3;
    var diff = (10 - (sum % 10)) % 10; // the result of this should be only 1 digit

    return diff == checksumTwo;
};

/**
 * @description Returns whether a CBU is valid.
 * @param {string} cbu
 * @returns {boolean} isValid
 */
var isValid = function(cbu) {
    if (!cbu || !cbu.substr) return false;
    var bankCode = cbu.substr(0, 8);
    var accountCode = cbu.substr(8, 14);
    return _isLengthOk(cbu) && _isValidBankCode(bankCode) && _isValidAccount(accountCode);
};

/**
 * @description Returns the name of the bank associated to a given CBU.
 * @param {string} cbu
 * @returns {string} name of the bank
 * @throws Will throw if the code is not associated to a bank
 */
var getAssociatedBank = function(cbu) {
  if (!cbu) throw new Error('No CBU provided');
  if (!isValid(cbu)) throw new Error('CBU is not valid');
  // Info: http://www.afip.gob.ar/aplicativos/
    // > Ganancias Personas Jurídicas - Sociedades > Versión 16.0 Release 1 > Tablas del sistema > Bancos (See list)
  var code = parseInt(cbu.substr(0, 3), 10);
  switch(code) {
    case 5: return   'The Royal Bank of Scotland N.V.';
    case 7: return   'Banco de Galicia y Buenos Aires S.A.';
    case 11: return  'Banco de la Nación Argentina';
    case 14: return  'Banco de la Provincia de Buenos Aires';
    case 15: return  'Industrial and Comercial Bank of China';
    case 16: return  'Citibank N.A.';
    case 17: return  'BBVA Banco Francés S.A.';
    case 18: return  'The Bank of Tokyo-Mitsubishi UFJ, LTD.';
    case 20: return  'Banco de la Provincia de Córdoba S.A.';
    case 27: return  'Banco Supervielle S.A.';
    case 29: return  'Banco de la Ciudad de Buenos Aires';
    case 30: return  'Central de la República Argentina';
    case 34: return  'Banco Patagonia S.A.';
    case 44: return  'Banco Hipotecario S.A.';
    case 45: return  'Banco de San Juan S.A.';
    case 46: return  'Banco do Brasil S.A.';
    case 60: return  'Banco de Tucumán S.A.';
    case 65: return  'Banco Municipal de Rosario';
    case 72: return  'Banco Santander Río S.A.';
    case 83: return  'Banco del Chubut S.A.';
    case 86: return  'Banco de Santa Cruz S.A.';
    case 93: return  'Banco de la Pampa Sociedad de Economía Mixta';
    case 94: return  'Banco de Corrientes S.A.';
    case 97: return  'Banco Provincia del Neuquén S.A.';
    case 143: return 'Brubank S.A.U.';
    case 147: return 'Banco Interfinanzas S.A.';
    case 150: return 'HSBC Bank Argentina S.A.';
    case 165: return 'JP Morgan Chase Bank NA (Sucursal Buenos Aires)';
    case 191: return 'Banco Credicoop Cooperativo Limitado';
    case 198: return 'Banco de Valores S.A.';
    case 247: return 'Banco Roela S.A.';
    case 254: return 'Banco Mariva S.A.';
    case 259: return 'Banco Itaú Argentina S.A.';
    case 262: return 'Bank of America National Association';
    case 266: return 'BNP Paribas';
    case 268: return 'Banco Provincia de Tierra del Fuego';
    case 269: return 'Banco de la República Oriental del Uruguay';
    case 277: return 'Banco Saenz S.A.';
    case 281: return 'Banco Meridian S.A.';
    case 285: return 'Banco Macro S.A.';
    case 295: return 'American Express Bank LTD. S.A.';
    case 299: return 'Banco Comafi S.A.';
    case 300: return 'Banco de Inversión y Comercio Exterior S.A.';
    case 301: return 'Banco Piano S.A.';
    case 305: return 'Banco Julio S.A.';
    case 309: return 'Nuevo Banco de la Rioja S.A.';
    case 310: return 'Banco del Sol S.A.';
    case 311: return 'Nuevo Banco del Chaco S.A.';
    case 312: return 'MBA Lazard Banco de Inversiones S.A.';
    case 315: return 'Banco de Formosa S.A.';
    case 319: return 'Banco CMF S.A.';
    case 321: return 'Banco de Santiago del Estero S.A.';
    case 322: return 'Banco Industrial S.A.';
    case 325: return 'Deutsche Bank S.A.';
    case 330: return 'Nuevo Banco de Santa Fe S.A.';
    case 331: return 'Banco Cetelem Argentina S.A.';
    case 332: return 'Banco de Servicios Financieros S.A.';
    case 336: return 'Banco Bradesco Argentina S.A.';
    case 338: return 'Banco de Servicios y Transacciones S.A.';
    case 339: return 'RCI Banque S.A.';
    case 340: return 'BACS Banco de Crédito y Securitización S.A.';
    case 341: return 'Más Ventas S.A.';
    case 384: return 'Wilobank S.A.';
    case 386: return 'Nuevo Banco de Entre Ríos S.A.';
    case 389: return 'Banco Columbia S.A.';
    case 405: return 'Ford Credit Compañía Financiera S.A.';
    case 406: return 'Metrópolis Compañía Financiera S.A.';
    case 408: return 'Compañía Financiera Argentina S.A.';
    case 413: return 'Montemar Compañía Financiera S.A.';
    case 415: return 'Multifinanzas Compañía Financiera S.A.';
    case 428: return 'Caja de Crédito Coop. La Capital del Plata LTDA.';
    case 431: return 'Banco Coinag S.A.';
    case 432: return 'Banco de Comercio S.A.';
    case 434: return 'Caja de Crédito Cuenca Coop. LTDA.';
    case 437: return 'Volkswagen Credit Compañía Financiera S.A.';
    case 438: return 'Cordial Compañía Financiera S.A.';
    case 440: return 'Fiat Crédito Compañía Financiera S.A.';
    case 441: return 'GPAT Compañía Financiera S.A.';
    case 442: return 'Mercedes-Benz Compañía Financiera Argentina S.A.';
    case 443: return 'Rombo Compañía Financiera S.A.';
    case 444: return 'John Deere Credit Compañía Financiera S.A.';
    case 445: return 'PSA Finance Argentina Compañía Financiera S.A.';
    case 446: return 'Toyota Compañía Financiera de Argentina S.A.';
    case 448: return 'Finandino Compañía Financiera S.A.';
    case 992: return 'Provincanje S.A.';
  }

  throw new Error('Code not associated to any bank: ' + code);
}

/**
 * @description Returns the bank's branch associated to a given CBU.
 * @param {string} cbu
 * @returns {string} branch
 */
var getBranch = function(cbu) {
  if (!cbu) throw new Error('No CBU provided')
  if (!isValid(cbu)) throw new Error('CBU is not valid');
  return cbu.substr(4, 3);
};

/**
 * @description Returns the bank's code associated to a given CBU.
 * @param {string} cbu
 * @returns {int} bank code
 */
var getBankCode = function(cbu) {
  if (!cbu) throw new Error('No CBU provided')
  if (!isValid(cbu)) throw new Error('CBU is not valid');
  return parseInt(cbu.substr(0, 3), 10);
}

/**
 * @description Returns the account number associated to a given CBU.
 * @param {string} cbu
 * @returns {string} account number
 */
var getAccountNumber = function (cbu) {
  if (!cbu) throw new Error("No CBU provided");
  if (!isValid(cbu)) throw new Error("CBU is not valid");
  return cbu.substr(8, 14);
}

module.exports = {
  _isLengthOk: _isLengthOk,
  _isValidAccount: _isValidAccount,
  _isValidBankCode: _isValidBankCode,
  isValid: isValid,
  getAssociatedBank: getAssociatedBank,
  getBankCode: getBankCode,
  getBranch: getBranch,
  getAccountNumber: getAccountNumber,
};
