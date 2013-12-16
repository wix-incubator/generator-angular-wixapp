'use strict';

angular.module('appSettings', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/settings/main.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/donations_',
      suffix: '.json'
    });
  })
  .run(['wix', '$translate', function (wix, $translate) {
    // Version 1.1.1 of angular-translate has a bug with async
    // loading, last language loaded overrides your selection here. To
    // have predictable behavior we use simple approach with promise
    // value produced by $translate.uses(...) instead of
    // .preferredLanguage() or .fallbackLanguage().
    var locale = wix.Utils.getLocale();
    if (!locale) {
      locale = 'en';
    }
    $translate.uses(locale)
      .then(function success () {
        // translations loaded, nothing to do.
      }, function error () {
        // fallback language.
        $translate.uses('en');
      });
  }]);
