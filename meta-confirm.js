// metaConfirm.js

var exports = module.exports = {};

var request = require('request');


function findInPage(complete_url, searchMetaType, searchTag, searchContent, cb) {
    "use strict";

    if (complete_url === null) {
        cb(new Error("url cannot be null"), null);
        return;
    }

    if (searchTag === null) {
        cb(new Error("searchTag cannot be null"), null);
        return;
    }

    if (searchContent === null) {
        cb(new Error("searchContent cannot be null"), null);
        return;
    }

    if (searchMetaType === null) {
        cb(new Error("searchMetaType cannot be null"), null);
        return;
    }


    request(complete_url, function (error, response, body) {

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
