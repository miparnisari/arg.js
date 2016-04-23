var _isLengthOk = function(cbu) {
    return (cbu.length == 22);
};

var _isValidAccount = function(acc) {
    if (acc.length !== 14) {
        return false;
    }

    var sum = acc[0] * 3 + acc[1] * 9 + acc[2] * 7 + acc[3] * 1 + acc[4] * 3 + acc[5] * 9 + acc[6] * 7 + acc[7] * 1 + acc[8] * 3 + acc[9] * 9 + acc[10] * 7 + acc[11] * 1 + acc[12] * 3;
    var diff = 10 - (sum % 10);
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
    case 5: return 'ABN AMRO BANK';
    case 7: return 'BANCO DE GALICIA';
    case 11: return 'BANCO NACION';
    case 14: return 'BANCO DE LA PROVINCIA DE BUENOS AIRES';
    case 15: return 'BANCO ICBC';
    case 16: return 'CITIBANK N.A.';
    case 17: return 'BBVA BANCO FRANCES';
    case 18: return 'THE BANK OF TOKYO-MITSUBISHI';
    case 20: return 'BANCO DE LA PROVINCIA DE CORDOBA S.A.';
    case 27: return 'BANCO SUPERVIELLE S.A.';
    case 29: return 'BANCO CIUDAD';
    case 34: return 'BANCO PATAGONIA S.A.';
    case 44: return 'BANCO HIPOTECARIO S.A.';
    case 45: return 'BANCO DE SAN JUAN S.A.';
    case 46: return 'BANCO DO BRASIL S.A.';
    case 60: return 'BANCO DE TUCUMAN S.A.';
    case 65: return 'BANCO MUNICIPAL DE ROSARIO';
    case 72: return 'BANCO SANTANDER RIO S.A.';
    case 79: return 'BANCO REGIONAL DE CUYO S.A.';
    case 83: return 'BANCO DEL CHUBUT S.A.';
    case 86: return 'BANCO DE SANTA CRUZ S.A.';
    case 93: return 'BANCO DE LA PAMPA';
    case 94: return 'BANCO DE CORRIENTES S.A.';
    case 97: return 'BANCO PROVINCIA DEL NEUQUÉN S.A.';
    case 147: return 'BANCO B.I. CREDITANSTALT SOCIEDAD ANONIMA';
    case 150: return 'HSBC BANK ARGENTINA S.A.';
    case 165: return 'JPMORGAN CHASE BANK, NATIONAL ASSOCIATION';
    case 191: return 'BANCO CREDICOOP COOPERATIVO LIMITADO';
    case 198: return 'BANCO DE VALORES S.A.';
    case 247: return 'BANCO ROELA S.A.';
    case 254: return 'BANCO MARIVA S.A.';
    case 259: return 'BANCO ITAU BUEN AYRE S.A.';
    case 262: return 'BANK OF AMERICA, NATIONAL ASSOCIATION';
    case 266: return 'BNP PARIBAS';
    case 268: return 'BANCO PROVINCIA DE TIERRA DEL FUEGO';
    case 269: return 'BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY';
    case 277: return 'BANCO SAENZ S.A.';
    case 281: return 'BANCO MERIDIAN S.A.';
    case 285: return 'BANCO MACRO S.A.';
    case 295: return 'AMERICAN EXPRESS BANK LTD. SOCIEDAD ANONIMA';
    case 299: return 'BANCO COMAFI S.A.';
    case 300: return 'BANCO DE INVERSION Y COMERCIO EXTERIOR S.A.';
    case 301: return 'BANCO PIANO S.A.';
    case 303: return 'BANCO FINANSUR S.A.';
    case 305: return 'BANCO JULIO S.A.';
    case 306: return 'BANCO PRIVADO DE INVERSIONES S.A.';
    case 309: return 'NUEVO BANCO DE LA RIOJA S.A.';
    case 310: return 'BANCO DEL SOL S.A.';
    case 311: return 'NUEVO BANCO DEL CHACO S.A.';
    case 312: return 'MBA BANCO DE INVERSIONES S.A.';
    case 315: return 'BANCO DE FORMOSA S.A.';
    case 319: return 'BANCO CMF S.A.';
    case 321: return 'BANCO DE SANTIAGO DEL ESTERO S.A.';
    case 322: return 'NUEVO BANCO INDUSTRIAL DE AZUL S.A.';
    case 325: return 'DEUTSCHE BANK S.A.';
    case 330: return 'NUEVO BANCO DE SANTA FE S.A.';
    case 331: return 'BANCO CETELEM ARGENTINA S.A.';
    case 332: return 'BANCO DE SERVICIOS FINANCIEROS S.A.';
    case 335: return 'BANCO COFIDIS S.A.';
    case 336: return 'BANCO BRADESCO ARGENTINA S.A.';
    case 338: return 'BANCO SANTIAGO DEL ESTERO S.A.';
    case 339: return 'RCI BANQUE';
    case 340: return 'BACS BANCO DE CREDITO Y SECURITIZACION SA';
    case 341: return 'BANCO MAS VENTAS';
    case 386: return 'NUEVO BANCO DE ENTRE RÍOS S.A.';
    case 388: return 'NUEVO BANCO BISEL S.A.';
    case 389: return 'BANCO COLUMBIA S.A.';
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