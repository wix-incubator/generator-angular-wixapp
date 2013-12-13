'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var WixappGenerator = module.exports = function WixappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

//  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WixappGenerator, yeoman.generators.Base);

WixappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

WixappGenerator.prototype.projectfiles = function projectfiles() {
// this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};