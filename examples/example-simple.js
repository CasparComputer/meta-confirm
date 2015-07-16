// example-simple.js

var metaconfirm = require('./../meta-confirm');

//
// Change to your settings
//

var url = "http://www.caspar.com";
var searchType = "name";
var searchTag = "description";
var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

//
//
//

// create a callback to receive the results when completed

function callback(res, error) {
    "use strict";

    console.log("Response: " + res + " : " + searchTag);
    console.log("Error: " + error);

}

metaconfirm.FindInPage(url, searchType, searchTag, content, callback);


