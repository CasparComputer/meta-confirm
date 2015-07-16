// initialTests.js

var expect = require('chai').expect;
var metaconfirm = require('../meta-confirm');


describe("a test", function () {

    var foo = false;

    beforeEach(function (done) {

        setTimeout(function () {
            foo = true;

            // complete the async beforeEach
            done();

        }, 500);

    });

    it("should pass", function () {
        expect(foo).equals(true);
    });

});


describe("A Core Homepage Test", function () {


    var resFinal = null;


    beforeEach(function (done) {

        setTimeout(function () {


            resFinal = null;

            var searchTag = "description";
            var searchType = "name";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";


            metaconfirm.FindInPage("http://www.caspar.com", searchType, searchTag, content, function callback(result) {
                "use strict";

                resFinal = result;

                done();

            });


        }, 500);

    });

    it("should pass", function () {
        expect(resFinal).equals(true, "Expecting a True result from Meta Search");
    });

});











