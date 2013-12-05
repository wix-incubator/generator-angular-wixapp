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

  var args = ['main'];
  var params = {args: args,
    options: {
        options: {
           'skip-install': true
        }
    }
  };
  this.hookFor('angular:app', params);
  /*
  this.hookFor('angular:common', params);
  this.hookFor('angular:main', params);
  this.hookFor('angular:controller', params);
  */
};

util.inherits(WixappGenerator, yeoman.generators.Base);

/*
WixappGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

WixappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

WixappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
*/
