'use strict';

angular.module('wixApp')
  .controller('MainCtrl', function ($scope, $wix) {
    $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);

    $scope.handleEvent = function(event) {
      console.log(event);
      $scope.message = event;
    };
  });