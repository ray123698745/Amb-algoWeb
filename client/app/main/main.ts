'use strict';
/// <reference path="/home/parallels/WebstormProjects/Amb-algoWeb/client/typings/angularjs/angular.d.ts" />

angular.module('ambAlgoWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });
