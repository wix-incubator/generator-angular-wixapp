'use strict';

angular.module('appSettings')
  .controller('SettingsCtrl', function ($scope, wix) {
    wix.UI.initialize({
      numOfImages: 10,
      isIconShown: true,
      imageVisibility: 'show',
      imagesToSync: 0,
      imageMeta: true,
      imageAlt: false,
      imageLink: false
    });
  });