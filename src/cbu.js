var _isLengthOk = function(cbu) {
    return (cbu.length == 22);
};

var _isValidAccount = function(acc) {
    if (acc.length !== 14) {
        return false;
    }

    var sum = acc[0] * 3 + acc[1] * 9 + acc[2] * 7 + acc[3] * 1 + acc[4] * 3 + acc[5] * 9 + acc[6] * 7 + acc[7] * 1 + acc[8] * 3 + acc[9] * 9 + acc[10] * 7 + acc[11] * 1 + acc[12] * 3;
    var diff = (10 - (sum % 10)) % 10; // the result of this should be only 1 digit
    var checksum = acc[13];
    return diff == checksum;
};

var _isValidBankCode = function(code) {
    if (code.length !== 8) {
        return false;
    }
    var bank = code.substr(0, 3);
    var checksumOne = code[3];
    var branch = code.substr(4, 3);
    var checksumTwo = code[7];

    var sum = bank[0] * 7 + bank[1] * 1 + bank[2] * 3 + checksumOne * 9 + branch[0] * 7 + branch[1] * 1 + branch[2] * 3;

    var diff = 10 - (sum % 10);

    return diff == checksumTwo;
};

/**
 * @module cbu
 * Returns whether a CBU is valid.
 * @param {string} cbu
 * @returns {boolean} isValid
 */
var isValid = function(cbu) {
    var bankCode = cbu.substr(0, 8);
    var accountCode = cbu.substr(8, 14);
    return _isLengthOk(cbu) && _isValidBankCode(bankCode) && _isValidAccount(accountCode);
};

/**
 * @module cbu
 * Returns the name of the bank associated to a given CBU.
 * @param {string} cbu
 * @returns {string} name of the bank
 * @throws Will throw if the code is not associated to a bank
 */
var getAssociatedBank = function(cbu) {
  // Info: http://www.comafi.com.ar/Multimedios/otros/200.pdf
  // More info: http://www.santanderrio.com.ar/corporativas/ayuda_rs/archivos/bancos_cci.pdf
  var code = parseInt(cbu.substr(0, 3), 10);
  switch(code) {
    case 5: return   'ABN AMRO Bank';
    case 7: return   'Banco Galicia';
    case 11: return  'Banco Nación';
    case 14: return  'Banco de la Provincia de Buenos Aires';
    case 15: return  'Banco ICBC';
    case 16: return  'Citibank';
    case 17: return  'BBVA Banco Francés';
    case 18: return  'The Bank Of Tokyo-Mitsubishi';
    case 20: return  'Banco de la Provincia de Córdoba';
    case 27: return  'Banco Supervielle';
    case 29: return  'Banco Ciudad';
    case 34: return  'Banco Patagonia';
    case 44: return  'Banco Hipotecario';
    case 45: return  'Banco de San Juan';
    case 46: return  'Banco do Brasil';
    case 60: return  'Banco de Tucuman';
    case 65: return  'Banco Municipal de Rosario';
    case 72: return  'Banco Santander Rio';
    case 79: return  'Banco Regional de Cuyo';
    case 83: return  'Banco del Chubut';
    case 86: return  'Banco de Santa Cruz';
    case 93: return  'Banco de la Pampa';
    case 94: return  'Banco de Corrientes';
    case 97: return  'Banco Provincia del Neuquén';
    case 147: return 'Banco BI Creditanstalt';
    case 150: return 'Banco HSBC';
    case 165: return 'JP Morgan Chase';
    case 191: return 'Banco Credicoop Cooperativo Limitado';
    case 198: return 'Banco de Valores';
    case 247: return 'Banco Roela';
    case 254: return 'Banco Mariva';
    case 259: return 'Banco Itau';
    case 262: return 'Bank of America';
    case 266: return 'BNP Paribas';
    case 268: return 'Banco Provincia de Tierra del Fuego';
    case 269: return 'Banco de la Republica Oriental del Uruguay';
    case 277: return 'Banco Saenz';
    case 281: return 'Banco Meridian';
    case 285: return 'Banco Macro';
    case 295: return 'American Express';
    case 299: return 'Banco Comafi';
    case 300: return 'Banco de Inversion Y Comercio Exterior';
    case 301: return 'Banco Piano';
    case 303: return 'Banco Finansur';
    case 305: return 'Banco Julio';
    case 306: return 'Banco Privado de Inversiones';
    case 309: return 'Nuevo Banco de la Rioja';
    case 310: return 'Banco del Sol';
    case 311: return 'Nuevo Banco del Chaco';
    case 312: return 'MBA Banco de Inversiones';
    case 315: return 'Banco de Formosa';
    case 319: return 'Banco CMF';
    case 321: return 'Banco de Santiago del Estero';
    case 322: return 'Nuevo Banco Industrial de Azul';
    case 325: return 'Deutsche Bank';
    case 330: return 'Nuevo Banco de Santa Fe';
    case 331: return 'Banco Cetelem';
    case 332: return 'Banco de Servicios Financieros';
    case 335: return 'Banco Cofidis';
    case 336: return 'Banco Bradesco';
    case 338: return 'Banco Santiago del Estero';
    case 339: return 'RCI Banque';
    case 340: return 'BACS Banco de Credito y Securitizacion';
    case 341: return 'Banco Mas Ventas';
    case 386: return 'Nuevo Banco de Entre Ríos';
    case 388: return 'Nuevo Banco Bisel';
    case 389: return 'Banco Columbia';
  }

  throw new Error('Code not associated to any bank: ' + code);
}

/**
 * @module cbu
 * Returns the bank's branch associated to a given CBU.
 * @param {string} cbu
 * @returns {string} branch
 */
var getBranch = function(cbu) {
  return cbu.substr(4, 3);
};

/**
 * @module cbu
 * Returns the bank's code associated to a given CBU.
 * @param {string} cbu
 * @returns {int} bank code
 */
var getBankCode = function(cbu) {
  return parseInt(cbu.substr(0, 3), 10);
}

module.exports = {
    _isLengthOk: _isLengthOk,
    _isValidAccount: _isValidAccount,
    _isValidBankCode: _isValidBankCode,
    isValid: isValid,
    getAssociatedBank: getAssociatedBank,
    getBankCode: getBankCode,
    getBranch: getBranch,
};