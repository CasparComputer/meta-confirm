// example-simple.js

var metaconfirm = require('./../meta-confirm');

var url = "http://www.caspar.com";
var searchType = "name";
var searchTag = "description";
var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

// callback created before calling it later per js lint

function callback(res, error) {
    "use strict";

    console.log("Response: " + res + " : " + searchTag);
    console.log("Error: " + error);

}

metaconfirm.FindInPage(url, searchType, searchTag, content, callback);




