var should  = require('should');
var cbu = require('../src/cbu');

describe('CBU', function() {
  it("has exactly 22 characters", function(done) {
    cbu._isLengthOk('12345678901234567890').should.be.exactly(false); //20 chars
    cbu._isLengthOk('1234567890123456789012').should.be.exactly(true); //22 chars
    done();
  });

  it("has valid bank code", function(done) {
    cbu._isValidBankCode('2850590').should.be.exactly(false); //8 chars
    cbu._isValidBankCode('28505907').should.be.exactly(false); //incorrect checksum
    cbu._isValidBankCode('28505909').should.be.exactly(true);
    done();
  });

  it("has valid account number", function(done) {
    cbu._isValidAccount('400904181352019').should.be.exactly(false); //14 chars
    cbu._isValidAccount('40090418135202').should.be.exactly(false); //incorrect checksum
    cbu._isValidAccount('40090418135201').should.be.exactly(true);
    done();
  });

  it("has associated bank", function(done) {
    cbu.getAssociatedBank('2850590940090418135201').should.be.exactly('Banco Macro');
    cbu.getAssociatedBank('0050590940090418135201').should.be.exactly('ABN AMRO Bank');
    should(function(){cbu.getAssociatedBank('9990590940090418135201')} ).throw(); //Bank does not exist
    done();
  });

  it("is valid overall", function(done) {
    cbu.isValid("2810590940090418135201").should.be.exactly(false); //invalid bank
    cbu.isValid("2850590940090418135211").should.be.exactly(false); //invalid account
    cbu.isValid("28505909400904181352012").should.be.exactly(false); //invalid length
    cbu.isValid("2850590940090418135201").should.be.exactly(true);
    done();
  });
});