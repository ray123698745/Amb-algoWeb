'use strict';

angular.module('ambAlgoWebApp.auth', [
  'ambAlgoWebApp.constants',
  'ambAlgoWebApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
