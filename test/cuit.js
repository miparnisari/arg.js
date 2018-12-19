var should  = require('should');
var cuit = require('../src/cuit');

describe('CUIT / CUIL', function() {
  it("has exactly 11 characters", function() {
    cuit._isLengthOk('1111111111').should.be.exactly(false); //missing checksum digit
    cuit._isLengthOk('11111111112').should.be.exactly(true);
  });

  it("has correct type (first 2 digits)", function() {
    cuit._isTypeOk('11111111112').should.be.exactly(false); //invalid type
    cuit._isTypeOk('20111111112').should.be.exactly(true);
    cuit._isTypeOk('23111111112').should.be.exactly(true);
    cuit._isTypeOk('24111111112').should.be.exactly(true);
    cuit._isTypeOk('27111111112').should.be.exactly(true);
    cuit._isTypeOk('30111111112').should.be.exactly(true);
    cuit._isTypeOk('33111111112').should.be.exactly(true);
    cuit._isTypeOk('34111111112').should.be.exactly(true);
  });

  it("has correct checksum", function() {
    cuit._checksumIsOk('27361705031').should.be.exactly(false); //invalid checksum
    cuit._checksumIsOk('27361705039').should.be.exactly(true);
    //TODO add test for cbu with second verifying digit equal to 0
  });

  it("should not throw an error with letters", function() {
    cuit.isValid("2736d7d5039").should.be.exactly(false);
  });

  it("should not throw an error with a nullish value", function() {
    cuit.isValid().should.be.exactly(false);
    cuit.isValid(undefined).should.be.exactly(false);
    cuit.isValid(null).should.be.exactly(false);
  });

  it("should not throw an error with an empty string", function() {
    cuit.isValid('').should.be.exactly(false);
  });

  it("should not throw an error with NaN", function() {
    cuit.isValid(NaN).should.be.exactly(false);
  });

  it("is valid overall", function() {
    cuit.isValid("111111111").should.be.exactly(false); //invalid length
    cuit.isValid("11111111112").should.be.exactly(false); //invalid type
    cuit.isValid("27361705031").should.be.exactly(false); //invalid checksum
    cuit.isValid("27361705039").should.be.exactly(true);
  });
});
