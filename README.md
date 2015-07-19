

# meta-confirm

[![Build Status](https://travis-ci.org/CasparComputer/meta-confirm.svg)](https://travis-ci.org/CasparComputer/meta-confirm.svg)
[![NPM Version](http://img.shields.io/npm/v/meta-confirm.svg?style=flat)](https://www.npmjs.org/package/meta-confirm)
[![NPM Downloads](https://img.shields.io/npm/dm/meta-confirm.svg?style=flat)](https://www.npmjs.org/package/meta-confirm)

## meta-confirm.  Designed to do easy and quick testing of web pages for specific tags.

* Can be run as part of an application to check sites on an ongoing basis for quality.
* Can be used as part of test framework (mocha example provided) to ensure meta tag quality during development.


Depending on if you need as part of your testing framework or as part of an application, use the appropriate npm install:

    npm install meta-confirm --save-dev
or

    npm install meta-confirm --save
     
##Using the module (application)
    
### [For a sample from normal code, see example-simple.js](https://github.com/CasparComputer/meta-confirm/blob/master/examples/example-simple.js)

### [For a sample test running in mocha, see mochaSingleTests.js](https://github.com/CasparComputer/meta-confirm/blob/master/test/mochaSingleTests.js)

### Sample from my own site
### (nodeJS and express

    [![](https://github.com/CasparComputer/meta-confirm/blob/master/examples/casparsample.js)    
   
    

## Revision History

### 0.0.8 - July 17, 2015
- When Null Data was being sent to any of the input fields, the module will still doing a request anyway. Adjusted to return param not null errors instead
- changed readme to not send people to www.caspar.com but to localhost instead (in the node sample)
- jshint for code consistency and safety

### 0.0.7 - July 16, 2015
- missed new README.md

### 0.0.6 - July 16, 2015
- simplified mocha test samples

### 0.0.5 - July 16, 2015
- Improve Tests 

### 0.0.4 - July 16, 2015
- pre-release 

### 0.0.1  July 16, 2015
- pre-release
        
    
    
