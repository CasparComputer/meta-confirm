var metaconfirm = require('meta-confirm');
var expect = require('chai').expect;

var testPort = 9009;  // adjust to proper port of course (sample only)

var url = 'http://localhost:' + testPort;

describe('Home Page Meta Tags', function () {
    "use strict";

    describe('findInPage', function () {

        it('name and description', function (done) {

            var searchType = "name";
            var searchTag = "description";
            var content = "Our website's description that should show up";


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

        it('name and distribution', function (done) {

            var searchType = "name";
            var searchTag = "distribution";
            var content = "global";


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

        it('property and og:title', function (done) {


            var searchType = "property";
            var searchTag = "og:title";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions Since 1984";


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

        it('property and og:type', function (done) {

            var searchType = "property";
            var searchTag = "og:type";
            var content = "website";


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



        it('property and og:description', function (done) {

            var searchType = "property";
            var searchTag = "og:description";
            var content = 'opengraph description for facebook';

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


        it('name and author', function (done) {

            var searchType = "name";
            var searchTag = "author";
            var content = "The author that we expect";

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


        it('name and keywords', function (done) {

            var searchType = "name";
            var searchTag = "keywords";
            var content = "caspar,agile,agile coaching,agile mentoring,agile development,project management,project coordination,infrastructure,ITIL,casper";

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


        it('name and rating of General', function (done) {

            var searchType = "name";
            var searchTag = "rating";
            var content = "General";

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


        it('name and revisit after 5 days', function (done) {

            var searchType = "name";
            var searchTag = "revisit-after";
            var content = "5 days";

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


        it('name and google analytics code for caspar', function (done) {

            var searchType = "name";
            var searchTag = "google-site-verification";
            var content = "verification here";

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

