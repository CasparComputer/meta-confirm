var sinon = require('sinon');
var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;
var request = require('request');


describe('User Profile', function () {
    'use strict';

    before(function (done) {

        sinon
                .stub(request, 'get')
                .yields(null, null, '<meta name="rating" content="General">');
        done();
    });

    after(function (done) {
        request.get.restore();
        done();
    });

    var url = "http://www.caspar.com";
    var searchType = "name";
    var searchTag = "description";
    var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";


    it('can get user profile', function (done) {
        metaconfirm.FindInPage(url, searchType, searchTag, content, function (err, result) {
                    if (err) {
                        done(err);
                    }

                    expect(result).equals(true, "should get a true");
                    done();
                }
        );

    });

});



