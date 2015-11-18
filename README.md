

# meta-confirm

[![Build Status](https://travis-ci.org/CasparComputer/meta-confirm.svg)](https://travis-ci.org/CasparComputer/meta-confirm)
[![NPM Version](https://img.shields.io/npm/v/meta-confirm.svg?style=flat)](https://www.npmjs.org/package/meta-confirm)
[![NPM Downloads](https://img.shields.io/npm/dm/meta-confirm.svg?style=flat)](https://www.npmjs.org/package/meta-confirm)

## meta-confirm.  Designed to do easy and quick testing of web pages for specific tags.

* Can be run as part of an application to check sites on an ongoing basis for quality.
* Can be used as part of test framework (mocha example provided) to ensure meta tag quality during development.

## Note: 0.10.x versions of Node Support Deprecated

Depending on if you need as part of your testing framework or as part of an application, use the appropriate npm install:

    npm install meta-confirm --save-dev
or

    npm install meta-confirm --save
     
##Using the module (application)
    
### [For a sample from normal code, see example-simple.js](https://github.com/CasparComputer/meta-confirm/blob/master/examples/example-simple.js)

### [For a sample test running in mocha, see mochaSingleTests.js](https://github.com/CasparComputer/meta-confirm/blob/master/test/mochaSingleTests.js)

### nodeJS and express sample


    var metaconfirm = require('meta-confirm');
    var expect = require('chai').expect;
        
    describe('Mike Test', function () {
        "use strict";
    
        var testPort = 9005;
    
        describe('findInPage', function () {
    
            it('should work', function (done) {
    
                var url = "http://localhost:" + testPort;
    
                var searchMetaType = "name";
                var searchTag = "description";
                var content = "Caspar Computer Services Inc.  Providing Innovative Solutions since 1984. Passionate about Agile Development";
    
    
                metaconfirm.FindInPage(url, searchMetaType, searchTag, content, function callback(err, result) {
                    //if we have no result and no error, it's not completed!
    
                    if (err) {
                        throw err;
                    }
    
                    if (result) {
                        expect(result).equals(true, "Expecting a True result from Meta Search");
                        done();
                    }
    
                });
            });
        });
    });


Coverage at ... http://s3.amazonaws.com/meta-confirm/index.html


