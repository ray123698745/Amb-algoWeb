'use strict';
var NavbarController = (function () {
    //end-non-standard
    function NavbarController(Auth) {
        //start-non-standard
        this.menu = [{
                'title': 'Query',
                'state': 'query'
            }, {
                'title': 'Benchmark',
                'state': 'benchmark'
            }, {
                'title': 'Annotate',
                'state': 'annotate'
            }];
        this.isCollapsed = true;
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }
    return NavbarController;
}());
angular.module('ambAlgoWebApp')
    .controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map