// example-simple.js

var metaconfirm = require('./../meta-confirm');

var winston = require('winston');

var searchTag = "description";
var searchType = "name";
var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

var logger = new (winston.Logger)({
        transports: [
                new (winston.transports.Console)()
        ]
});


function callback(res, error) {
        "use strict";

        logger.info("Response: " + res + " : " + searchTag);
        logger.info("Error: " + error);

}

metaconfirm.FindInPage("http://www.caspar.com", searchType, searchTag, content, callback);



