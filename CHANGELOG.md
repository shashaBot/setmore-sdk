# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/shashaBot/setmore-sdk/compare/v0.1.0...v0.2.0) (2020-06-12)
* Use a single axios instance across all resources
* Add interceptor for adding access token automatically on all requests (except for token refresh request)
* Retry failed request with automatic token refresh using [axios-auth-refresh](https://www.npmjs.com/package/axios-auth-refresh)


## 0.1.0 (2020-05-27)
* Initial release, unstable for parallel requests coming in but can make simple requests.
