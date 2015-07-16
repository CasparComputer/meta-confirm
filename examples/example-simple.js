// example-simple.js

var metaconfirm = require('./../meta-confirm');

var searchTag = "description";
var searchType = "name";
var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

metaconfirm.FindInPage("http://www.caspar.com", searchType, searchTag, content, callback);

function callback(res) {

    console.log(res + " : " + searchTag);


}





