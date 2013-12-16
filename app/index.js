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

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitattributes', '.gitattributes');
  this.copy('bowerrc', '.bowerrc');
};