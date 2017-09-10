var should  = require('should');
var phone = require('../src/phone');

describe('Phones', function() {
  it('should be cleaned', function() {
    phone.clean('91156623011').should.be.exactly('+5491156623011');
    phone.clean('1556623011', 'AR', '+5491156623311').should.be.exactly('+5491156623011');
    phone.clean('+5491156623011', 'AR').should.be.exactly('+5491156623011');
    phone.clean('+5491156623011').should.be.exactly('+5491156623011');
    phone.clean('+541156623011', 'AR').should.be.exactly('+5491156623011');
    phone.clean('1556623011', 'AR').should.be.exactly('+5491156623011');
    phone.clean('56623011').should.be.exactly('+5491156623011');
    phone.clean('56623011', 'AR', '+5491156623311').should.be.exactly('+5491156623011');
  })
});
