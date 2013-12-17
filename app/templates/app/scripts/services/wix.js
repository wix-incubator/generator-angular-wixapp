'use strict';

angular.module('wix', []);

angular.module('wix').factory('$wix', function ($location) {
  var url = $location.absUrl();

  Wix.Utils.getInstance = function() {
    var instanceRegexp = /.*instance=([\[\]a-zA-Z0-9\.\-_]*?)(&|$|#).*/g;
    var instance = instanceRegexp.exec(url);
    if (instance && instance[1]) {
      return instance[1];
    } else {
      return undefined;
    }
  };
  return Wix;
});