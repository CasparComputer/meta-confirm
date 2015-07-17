var metaconfirm = require('../../meta-confirm');
var expect = require('chai').expect;



describe('Mike Test', function () {

    describe('findInPage', function () {

        it('should work', function (done) {

            var url = "http://www.caspar.com";
            var searchType = "name";
            var searchTag = "description";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";


            metaconfirm.FindInPage(url, searchType, searchTag, content, function callback(err, result) {
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
