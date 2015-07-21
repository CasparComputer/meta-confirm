var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;
var request = require('request');
var sinon = require('sinon');

describe('Mocked Requests to check validation logic with Error on Get', function () {
    'use strict';

    beforeEach(function (done) {
        sinon
                .stub(request, 'get')
                .yields(new Error('test Error'), null, null);
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


    it('will not find the data if it does not exist', function (done) {
        metaconfirm.FindInPage(url, searchType, searchTag + "X", content, function (err, result) {


                    expect(err.message).equals("test Error");
                    expect(result).equals(null);
                    done();
                }
        );
    });


});



