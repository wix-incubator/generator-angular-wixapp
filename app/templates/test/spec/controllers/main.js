'use strict';

describe('Controller: MainCtrl', function () {

  var scope;

  beforeEach(module('wixApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var wix = {};
    wix.Utils = jasmine.createSpyObj('utils', ['getInstanceId', 'getInstance']);
    wix.Events = {
      SETTINGS_UPDATED: "updated"
    }
    $controller('MainCtrl', {$scope: scope, $wix: wix});
  }));

  it('should listen to settings panel updates', function() {
  });

  it('should update the message when event occurs', function() {
  });
});
