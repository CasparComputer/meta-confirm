// metaConfirm.js

var exports = module.exports = {};

var request = require('request');


function findInPage(completeUrl, searchMetaType, searchTag, searchContent, cb) {
    "use strict";

    var sendBackAnError = function (cb, errorMessage) {

        cb(new Error(errorMessage), null);

    };

    if (completeUrl === null) {

        sendBackAnError(cb, "url cannot be null");
        return;

    }

    if (searchTag === null) {
        sendBackAnError(cb, "searchTag cannot be null");
        return;
    }

    if (searchContent === null) {
        sendBackAnError(cb, "searchContent cannot be null");
        return;
    }

    if (searchMetaType === null) {
        sendBackAnError(cb, "searchMetaType cannot be null");
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
