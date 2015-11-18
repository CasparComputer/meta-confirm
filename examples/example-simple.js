// example-simple.js

"use strict";

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

function callback(error, res) {

    console.log("Error: " + error);
    console.log("Response: " + res + " : " + searchTag);


}

metaconfirm.FindInPage(url, searchType, searchTag, content, callback);


