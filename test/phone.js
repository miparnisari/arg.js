var should  = require('should');
var phone = require('../src/phone');

describe('Phones', function() {
  it('should add 9 to number', function() {
    phone.clean('+541156623011').should.be.exactly('+5491156623011');
  })

  it('should add country code', function() {
    phone.clean('91156623011').should.be.exactly('+5491156623011');
  })

  it('should add country code and area code and 9', function() {
    phone.clean('1556623011').should.be.exactly('+5491156623011');
  })

  it('should add country code and area code', function() {
    var areaCode = '12'
    phone.clean('1556623011', areaCode).should.be.exactly('+5491256623011');
  })

  it('should return original phone when it has country and area code', function() {
    phone.clean('+5491156623011').should.be.exactly('+5491156623011');
  })
});
