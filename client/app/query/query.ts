'use strict';

angular.module('ambAlgoWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('query', {
        url: '/query',
        template: '<query></query>'
      });
  });
