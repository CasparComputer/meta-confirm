'use strict';

var expect = require('chai').expect;

describe('current process', function () {

    it('NODE_ENV is set to "'+ process.env.NODE_ENV + '"', function (done) {
        expect(process.env.NODE_ENV).equal('test');
        done();
    });
    
});
