var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;


describe('meta-confirm Exceptions', function () {
    "use strict";

    describe('parameter exceptions', function () {

        it('return an error if sending a null url without waiting for the timeout', function (done) {

            var url = null;
            var searchMetaType = "name";
            var searchTag = "description";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

            metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    expect(err.message).equals("url cannot be null");
                    done();
                }

                if (result) {
                    expect(result).equals(true, "Expecting a false result from Meta Search");
                    done();
                }

            });

        });

        it('return an error if sending a null searchTag without needing to do an unnecessary request and wait for timeout', function (done) {

            var url = "http://www.caspar.com";
            var searchMetaType = "name";
            var searchTag = null;
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

            metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    expect(err.message).equals("searchTag cannot be null");
                    done();
                }

                if (result) {
                    expect(result).equals(false, "Expecting a false result from Meta Search");
                    done();
                }

            });

        });


        it('return an error if sending a null content without needing to do an unnecessary request and wait for timeout', function (done) {

            var url = "http://www.caspar.com";
            var searchMetaType = "name";
            var searchTag = "description";
            var content = null;

            metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    expect(err.message).equals("searchContent cannot be null");
                    done();
                }

                if (result) {
                    expect(result).equals(false, "Expecting false result from Meta Search");
                    done();
                }

            });

        });

        it('returns an error if sending a null searchType without needing to do an unnecessary request and wait for timeout', function (done) {

            var url = "http://www.caspar.com";
            var searchMetaType = null;
            var searchTag = "description";
            var content = "test";

            metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    expect(err.message).equals("searchMetaType cannot be null");
                    done();
                }

                if (result) {
                    expect(result).equals(false, "Expecting a false result from Meta Search");
                    done();
                }

            });

        });



    });
});
