'use strict';

angular.module('appSettings')
  .controller('SettingsCtrl', function ($scope, $wix) {
    $scope.params = {
      account: 'john@doe.com'
    };

    $wix.UI.initialize({
      numOfImages: 10,
      isIconShown: true,
      imageVisibility: 'show',
      imagesToSync: 0,
      imageMeta: true,
      imageAlt: false,
      imageLink: false
    });

    $wix.UI.onChange('*', function() {
      $wix.Settings.triggerSettingsUpdatedEvent('updated', $wix.Utils.getOrigCompId());
    });
  });