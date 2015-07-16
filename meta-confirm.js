// metaConfirm.js

var exports = module.exports = {};


var request = require('request');


function findInPage(complete_url, searchType, searchForTag, searchContent, cb) {


    request(complete_url, function (error, response, body) {

            if (error) {
                cb(error, null);

            }
            else {


                var specificTag = '<meta ' + searchType + '="' + searchForTag + '" content="' + searchContent + '">';


                var cnt = body.split(specificTag).length;

                if (cnt === 1) {
                    cb(null, false);
                }
                else {
                    cb(null, true);

                }
            }
        }
    );

}


exports.FindInPage = findInPage;
