'use strict';

angular.module('ambAlgoWebApp', [
  'ambAlgoWebApp.auth',
  'ambAlgoWebApp.admin',
  'ambAlgoWebApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
