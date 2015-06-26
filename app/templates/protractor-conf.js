'use strict';

var config = {};

config.baseUrl = 'http://localhost:9000/';

config.specs = [
  process.cwd() + '/test/e2e/**/*.js'
];

config.framework = 'jasmine';

config.capabilities = {
  browserName: 'chrome'
};

module.exports.config = config;
