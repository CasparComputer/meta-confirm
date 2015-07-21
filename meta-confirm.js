// metaConfirm.js

var exports = module.exports = {};

var request = require('request');


function findInPage(completeUrl, searchMetaType, searchTag, searchContent, cb) {
    "use strict";

    function sendBackAnError(cb, errorMessage) {

        cb(new Error(errorMessage), null);


    }


    function checkForNull() {

        var errorString = null;

        if (completeUrl === null) {
            errorString = "url cannot be null";
        }

        if (searchMetaType === null) {
            errorString = "searchMetaType cannot be null";
        }

        if (searchTag === null) {
            errorString = "searchTag cannot be null";
        }

        if (searchContent === null) {
            errorString = "searchContent cannot be null";
        }

        return errorString;

    }

    var errorString = checkForNull();

    if (errorString !== null) {
        sendBackAnError(cb, errorString);
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
