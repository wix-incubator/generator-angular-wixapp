'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var WixappGenerator = module.exports = function WixappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WixappGenerator, yeoman.generators.Base);

WixappGenerator.prototype.app = function () {
  this.mkdir('app');
  this.mkdir('test');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/views');
  this.mkdir('app/images');
  this.mkdir('app/translations');
  this.mkdir('app/scripts/controllers');
  this.mkdir('app/scripts/services');
  this.mkdir('test');
  this.mkdir('test/spec');
  this.mkdir('test/spec/controllers');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');

  this.copy('jshintrc', '.jshintrc');
  this.copy('gitattributes', '.gitattributes');
  this.copy('bowerrc', '.bowerrc');

  this.copy('app/robots.txt');

  this.copy('app/styles/settings.css');
  this.copy('app/styles/app.css');

  this.copy('app/scripts/app.js');
  this.copy('app/scripts/settings.js');
  this.copy('app/scripts/controllers/settings.js');
  this.copy('app/scripts/controllers/main.js');
  this.copy('app/scripts/services/wix.js');

  this.copy('app/views/app.html');
  this.copy('app/views/settings.html');
  this.copy('app/index.html');
  this.copy('app/settings.html');

  this.copy('app/translations/settings_en.json');

  this.copy('app/images/wix_icon.png');

  this.copy('test/karma.conf.js');
  this.copy('test/spec/controllers/main.js');
};