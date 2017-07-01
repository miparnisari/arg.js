var should = require('should');
var document = require('../src/document');

describe('Document', function () {
  it('should be valid DNI', function (done) {
    document.isValidDni('111111').should.be.exactly(false);
    document.isValidDni('1111111').should.be.exactly(true);
    document.isValidDni('111d1111').should.be.exactly(false);
    document.isValidDni('11111111').should.be.exactly(true);
    document.isValidDni('111111111').should.be.exactly(false);
    done();
  });

  it('should be valid CI', function (done) {
    document.isValidCi('').should.be.exactly(false);
    document.isValidCi('1').should.be.exactly(true);
    document.isValidCi('111111111').should.be.exactly(true);
    document.isValidCi('1111111111').should.be.exactly(false);
    done();
  });

  it('should be valid LC', function (done) {
    document.isValidLc('11111').should.be.exactly(false);
    document.isValidLc('111111').should.be.exactly(true);
    document.isValidLc('1111111').should.be.exactly(true);
    document.isValidLc('11111111').should.be.exactly(false);
    done();
  });

  it('should be valid LE', function (done) {
    document.isValidLe('11111').should.be.exactly(false);
    document.isValidLe('111111').should.be.exactly(true);
    document.isValidLe('1111111').should.be.exactly(true);
    document.isValidLe('11111111').should.be.exactly(false);
    done();
  })
});
