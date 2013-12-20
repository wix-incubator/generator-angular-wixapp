/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var fs = require('fs');
var helpers = require('yeoman-generator').test;


describe('wixapp generator', function () {
  var testpath = path.join(__dirname, 'temp');

  beforeEach(function (done) {
    helpers.testDirectory(testpath, function (err) {
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
      ['Gruntfile.js', /compass/],
      ['package.json', /compass/],
      'bower.json',
      'test/.jshintrc',
      '.bowerrc',
      'app/robots.txt',
      'app/styles/app.scss',
      'app/styles/settings.scss',
      'app/scripts/app.js',
      'app/scripts/settings.js',
      'app/scripts/controllers/settings.js',
      'app/scripts/controllers/main.js',
      'app/scripts/services/wix.js',
      'app/views/app.html',
      'app/views/settings.html',
      'app/index.html',
      'app/settings.html',
      'app/translations/settings_en.json',
      'app/images/wix_icon.png',
      'test/karma.conf.js',
      'test/spec/controllers/main.js'
    ];

    helpers.mockPrompt(this.app, {
      'compass': true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);

      var pkg = JSON.parse(fs.readFileSync(path.join(testpath, 'package.json')), 'utf8');
      done();
    });
  });

  it('creates expected files if compass is disabled', function (done) {
    var expected = [
      '.jshintrc',
      '.gitattributes',
      ['Gruntfile.js', /(?!compass)/],
      ['package.json', /(?!compass)/],
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

      var pkg = JSON.parse(fs.readFileSync(path.join(testpath, 'package.json'), 'utf8'));
      done();
    });
  });
});
