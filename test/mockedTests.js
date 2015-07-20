var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;
var request = require('request');
var sinon = require('sinon');

describe('Mocked Requests', function () {
    'use strict';

    before(function (done) {

        sinon
                .stub(request, 'get')
                .yields(null, null, '<meta name="description" content="Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development">');

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



