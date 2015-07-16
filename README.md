

# meta-confirm

[![Build Status](https://travis-ci.org/CasparComputer/meta-confirm.svg)](https://travis-ci.org/CasparComputer/meta-confirm.svg)

## meta-confirm.  Designed to do easy and quick testing of web pages for specific tags.

* Can be run as part of an application to check sites on an ongoing basis for quality.
* Can be used as part of test framework (mocha example provided) to ensure meta tag quality during development.


Depending on if you need as part of your testing framework or as part of an application, use the appropriate npm install:

    npm install meta-confirm --save-dev
or

    npm install meta-confirm --save
     
##Using the module (application)
 
```javascript

var metaconfirm = require('./../meta-confirm');

var url = "http://www.example.com";         // complete url including http:
var searchType = "name";                    // tag type to look for ie: "name" , "property", "rel"
var searchTag = "description";              // descriptor to look for ie: "robots", "stylesheet", "og:title"
var content = "Our Website Description";    // content within tag to look for

// create a callback to receive the results when completed
function callback(res, error) {

    console.log("Response: " + res + " : " + searchTag);
    console.log("Error: " + error);

}


```

##Using the module (mocha)

```javascript

var expect = require('chai').expect;
var metaconfirm = require('../meta-confirm');

describe("A Core Homepage Test", function () {

    var resFinal = null;
    var resError= null;

    beforeEach(function (done) {

        setTimeout(function () {

            resFinal = null;
            resError = null;
            //
            //   Change these to your settings.
            //

            var url = "http://www.caspar.com";
            var searchTag = "description";
            var searchType = "name";
            var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";

            //
            // Change to your own settings
            //


            metaconfirm.FindInPage(url, searchType, searchTag, content, function callback(error, result) {

                resFinal = result;
                resError = error;

                done();

            });


        }, 500);

    });

    it("should pass", function () {
        expect(resFinal).equals(true, "Expecting a True result from Meta Search");
    });

});




```


    
### For a sample from normal code, see  [example-simple.js](https://github.com/CasparComputer/meta-confirm/blob/master/examples/example-simple.js)

### For a sample test running in mocha, see [mochaSingleTests.js](https://github.com/CasparComputer/meta-confirm/blob/master/test/mochaSingleTests.js)














