// metaConfirm.js

var exports = module.exports = {};
var request = require('request');
var validations = require('./lib/validations');


function findInPage(completeUrl, searchMetaType, searchTag, searchContent, cb) {
    "use strict";

    var nullErrorMessage = validations.checkForNullParameters(completeUrl, searchMetaType, searchTag, searchContent);

    if (nullErrorMessage !== null) {
        cb(nullErrorMessage, null);
        return;
    }

    var emptyErrorMessage = validations.checkForEmptyParameters(completeUrl, searchMetaType, searchTag, searchContent);

    if (emptyErrorMessage !== null) {
        cb(emptyErrorMessage, null);
        return;
    }


    request.get(completeUrl, function (error, response, body) {

                if (error) {
                    cb(error, null);

                }
                else {

                    var cnt = countMatchesInString(body, searchMetaType, searchTag, searchContent);

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


function countMatchesInString(body, searchMetaType, searchTag, searchContent) {
    "use strict";

    var specificTag = '<meta ' + searchMetaType + '="' + searchTag + '" content="' + searchContent + '">';

    return body.split(specificTag).length;

}


exports.FindInPage = findInPage;
