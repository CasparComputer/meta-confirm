"use strict";

var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;


describe('check for empty parameter exceptions', function () {

    it('return an error if sending an empty url without having to wait for the timeout', function (done) {

        var url = ' ';
        var searchMetaType = "name";
        var searchTag = "description";
        var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

        metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
            //if we have no result and no error, it's not completed!

            if (err) {
                expect(err.message).equals("url cannot be empty");
                done();
            }

            if (result) {
                expect(result).equals(false, "Expecting a false result from Meta Search");
                done();
            }

        });

    });

    it('return an error if sending an empty searchMetaType without needing to do an unnecessary request and wait for timeout', function (done) {

        var url = "http://www.caspar.com";
        var searchMetaType = ' ';
        var searchTag = 'description';
        var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

        metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
            //if we have no result and no error, it's not completed!

            if (err) {
                expect(err.message).equals("searchMetaType cannot be empty");
                done();
            }

            if (result) {
                expect(result).equals(false, "Expecting a false result from Meta Search");
                done();
            }

        });

    });


    it('returns an error if sending an empty searchTag without needing to do an unnecessary request and wait for timeout', function (done) {

        var url = "http://www.caspar.com";
        var searchMetaType = 'name';
        var searchTag = ' ';
        var content = "test";

        metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
            //if we have no result and no error, it's not completed!

            if (err) {
                expect(err.message).equals("searchTag cannot be empty");
                done();
            }

            if (result) {
                expect(result).equals(false, "Expecting a false result from Meta Search");
                done();
            }

        });

    });

    it('return an error if sending empty content without needing to do an unnecessary request and wait for timeout', function (done) {

        var url = "http://www.caspar.com";
        var searchMetaType = "name";
        var searchTag = "description";
        var content = ' ';

        metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
            //if we have no result and no error, it's not completed!

            if (err) {
                expect(err.message).equals("searchContent cannot be empty");
                done();
            }

            if (result) {
                expect(result).equals(false, "Expecting false result from Meta Search");
                done();
            }

        });

    });


});
