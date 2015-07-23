// validations.js

var exports = module.exports = {};

function checkForNullParameters(completeUrl, searchMetaType, searchTag, searchContent) {
    'use strict';

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

    if (errorString !== null) {
        return new Error(errorString);
    }
    else {
        return null;
    }


}

exports.checkForNullParameters = checkForNullParameters;
