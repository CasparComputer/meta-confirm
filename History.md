## Revision History

### 0.5.3
- rebuild for updated the dependencies
- 14.16.1 added to testing

### 0.5.2
- rebuild for updated the dependencies

### 0.5.1
- rebuild for updated the dependencies
- 12.16.1 added to testing

### 0.5.0
- updated the dependencies reported in package-lock.json because lodash was reported to have new vulnerabilities
- node version 8.15.0 removed from testing (it is no longer in LTS support)
- 12.7.10 added to testing

### 0.4.0
- updated the dependencies reported in package-lock.json because lodash was reported to have new vulnerabilities
- 12.7.0 added to testing
- node versions older than 8.15.0 have been removed from testing
- node version 10.15.0 removed from testing

### 0.3.1
- updated the dependencies reported in package-lock.json because js-yaml and handlebars were reported to have new vulnerabilities

### 0.3.0
- updated the version to reflect magnitude of recent change (of "request" module)

### 0.2.2
- updated the "request" module due to security vulnerability in 2.87.0 dependency
- new version of "request" module is incompabitle with node versions older than 6 (beyond LTS schedule anyways)
- node versions older than 6.9.1 have been removed from testing

### 0.2.1
- adjusted Node.js versions for Travis-CI tests

### 0.2.0
 - adjusted for cross-platform development
 - 8.15.0, 9.11.2, 10.15.0, 11.7.0 added to testing
 - recommend new pattern: test on latest releases of all LTS families which are still [actively maintained](https://github.com/nodejs/Release).

### 0.1.0
 - s3 coverage removed

### 0.0.19
 - 8.10.0 added to testing
 - io.js removed from testing
 - package dependencies (request) updated to version ~2.87.0

### 0.0.19
 - 8.10.0 added to testing
 - io.js removed from testing
 - package dependencies (request) updated to version ~2.87.0

### 0.0.18
 - package dependencies (request) updated to version ~2.79.0
 - 0.11.x deprecated from testing (use with caution)
 - 7.2.1 added to testing

### 0.0.17
 - 6.5.0 added to tests

### 0.0.16
 - 5.11.1, 5.12.0, 6.3.1 tested 

### 0.0.12 
- test with node 4.2.1 and 4.2.2
- 0.10.x deprecated from testing (use with caution)

### 0.0.11 -
- test coverage for request errors
- test coverage for page not found through mocked instance

### 0.0.10 - 
- used request.get instead of just request to allow easier test mocking with sinon

### 0.0.9 - July 18, 2015
- updated README to show code coverage results

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

