var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;


describe('meta-confirm Exceptions', function () {
    "use strict";

    describe('parameter exceptions', function () {

        it('return an error if sending a null url without waiting for the timeout', function (done) {

            var url = null;
            var searchType = "name";
            var searchTag = "description";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

            metaconfirm.FindInPage(url, searchType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    expect(err.message).equals("url cannot be null");
                    done();
                }

                if (result) {
                    expect(result).equals(true, "Expecting a True result from Meta Search");
                    done();
                }

            });
        });


    });
});
