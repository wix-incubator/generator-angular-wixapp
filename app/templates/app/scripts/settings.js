'use strict';

angular.module('appSettings', [
    'ngRoute',
    'pascalprecht.translate',
    'wix'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/settings_',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  });