/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;


describe('wixapp generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('angular-wixapp:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files if compass is enabled', function (done) {
    var expected = [
      '.jshintrc',
      '.gitattributes',
      '.gitignore',
      'app/styles/app.scss',
      'app/styles/settings.scss'
    ];

    helpers.mockPrompt(this.app, {
      'compass': true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files if compass is disabled', function (done) {
    var expected = [
      '.jshintrc',
      '.gitattributes',
      ['.gitignore', /node_modules/],
      'app/styles/app.css',
      'app/styles/settings.css'
    ];

    helpers.mockPrompt(this.app, {
      'compass': false
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
