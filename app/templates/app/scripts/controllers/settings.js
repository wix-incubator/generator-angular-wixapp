'use strict';

angular.module('appSettings')
  .controller('SettingsCtrl', function ($scope, wix) {
    wix.UI.initialize();
  });