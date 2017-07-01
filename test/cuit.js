var should  = require('should');
var cuit = require('../src/cuit');

describe('CUIT / CUIL', function() {
  it("has exactly 11 characters", function(done) {
    cuit._isLengthOk('1111111111').should.be.exactly(false); //missing checksum digit
    cuit._isLengthOk('11111111112').should.be.exactly(true);
    done();
  });

  it("has correct type (first 2 digits)", function(done) {
    cuit._isTypeOk('11111111112').should.be.exactly(false); //invalid type
    cuit._isTypeOk('20111111112').should.be.exactly(true);
    cuit._isTypeOk('23111111112').should.be.exactly(true);
    cuit._isTypeOk('24111111112').should.be.exactly(true);
    cuit._isTypeOk('27111111112').should.be.exactly(true);
    cuit._isTypeOk('30111111112').should.be.exactly(true);
    cuit._isTypeOk('33111111112').should.be.exactly(true);
    cuit._isTypeOk('34111111112').should.be.exactly(true);
    done();
  });

  it("has correct checksum", function(done) {
    cuit._checksumIsOk('27361705031').should.be.exactly(false); //invalid checksum
    cuit._checksumIsOk('27361705039').should.be.exactly(true);
    //TODO add test for cbu with second verifying digit equal to 0
    done();
  });

  it("should not throw error with letters", function(done) {
    cuit.isValid("2736d7d5039").should.be.exactly(false);
    done();
  });

  it("is valid overall", function(done) {
    cuit.isValid("111111111").should.be.exactly(false); //invalid length
    cuit.isValid("11111111112").should.be.exactly(false); //invalid type
    cuit.isValid("27361705031").should.be.exactly(false); //invalid checksum
    cuit.isValid("27361705039").should.be.exactly(true);
    done();
  });
});
