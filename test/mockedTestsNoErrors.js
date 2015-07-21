var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;
var request = require('request');
var sinon = require('sinon');

describe('Mocked Requests to check validation logic', function () {
    'use strict';

    beforeEach(function (done) {
        sinon
                .stub(request, 'get')
                .yields(null, null, '<meta name="description" content="Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development">');
        done();
    });

    afterEach(function (done) {
        request.get.restore();
        done();
    });


    var url = "http://www.caspar.com";
    var searchType = "name";
    var searchTag = "description";
    var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";


    it('can find the data correctly', function (done) {
        metaconfirm.FindInPage(url, searchType, searchTag, content, function (err, result) {
                    if (err) {
                        done(err);
                    }

                    expect(result).equals(true, "should get a true");
                    done();
                }
        );
    });

    it('will not find the data if it does not exist', function (done) {
        metaconfirm.FindInPage(url, searchType, searchTag + "X", content, function (err, result) {
                    if (err) {
                        done(err);
                    }

                    expect(result).equals(false, "should get a false");
                    done();
                }
        );
    });


});



