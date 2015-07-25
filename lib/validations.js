// validations.js

exports.checkForNullParameters = checkForNullParameters;
exports.checkForEmptyParameters = checkForEmptyParameters;


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

    if (errorString === null) {
        return null;
    } else {
        return new Error(errorString);
    }

}

function checkForEmptyParameters(completeUrl, searchMetaType, searchTag, searchContent) {
    'use strict';


    var errorString = null;

    if (completeUrl.trim() === '') {
        errorString = "url cannot be empty";
    }

    if (searchMetaType.trim() === '') {
        errorString = "searchMetaType cannot be empty";
    }

    if (searchTag.trim() === '') {
        errorString = "searchTag cannot be empty";
    }

    if (searchContent.trim() === '') {
        errorString = "searchContent cannot be empty";
    }


    if (errorString !== null) {
        return new Error(errorString);
    }
    else {
        return null;
    }


}

