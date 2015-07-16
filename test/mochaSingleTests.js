// mochaInitialTests.js

var expect = require('chai').expect;
var metaconfirm = require('../meta-confirm');

describe("A Core Homepage Test", function () {
    "use strict";

    var resFinal = null;

    beforeEach(function (done) {

        setTimeout(function () {

            resFinal = null;

            //
            //   Change these to your settings.
            //

            var url = "http://www.caspar.com";
            var searchTag = "description";
            var searchType = "name";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

            //
            // Change to your own settings
            //


            metaconfirm.FindInPage(url, searchType, searchTag, content, function callback(result) {

                resFinal = result;

                done();

            });


        }, 500);

    });

    it("should pass", function () {
        expect(resFinal).equals(true, "Expecting a True result from Meta Search");
    });

});











