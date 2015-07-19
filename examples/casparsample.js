var metaconfirm = require('meta-confirm');
var expect = require('chai').expect;



describe('Mike Test', function () {
    "use strict";

    var testPort = 9005;

    describe('findInPage', function () {

        it('should work', function (done) {

            var url = "http://localhost:" + testPort;

            var searchMetaType = "name";
            var searchTag = "description";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";


            metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                //if we have no result and no error, it's not completed!

                if (err) {
                    throw err;
                }

                if (result) {
                    expect(result).equals(true, "Expecting a True result from Meta Search");
                    done();
                }

            });
        });
    });
});
