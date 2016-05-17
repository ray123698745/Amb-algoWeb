'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Query',
    'state': 'query'
  },{
    'title': 'Benchmark',
    'state': 'benchmark'
  },{
    'title': 'Annotate',
    'state': 'annotate'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('ambAlgoWebApp')
  .controller('NavbarController', NavbarController);
