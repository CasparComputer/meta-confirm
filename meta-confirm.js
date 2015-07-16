// metaConfirm.js

var exports = module.exports = {};


var request = require('request');


function findInPage(complete_url, searchType, searchForTag, searchContent, cb) {


    request(complete_url, function (error, response, body) {

            if (error) {
                cb(false, error);

            }
            else {


                var specificTag = '<meta ' + searchType + '="' + searchForTag + '" content="' + searchContent + '">';


                var cnt = body.split(specificTag).length;

                if (cnt === 1) {
                    cb(false, null);
                }
                else {
                    cb(true, null);

                }
            }
        }
    );

}


exports.FindInPage = findInPage;
