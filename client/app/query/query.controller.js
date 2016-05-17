'use strict';
(function () {
    var QueryComponent = (function () {
        function QueryComponent() {
            this.message = 'Hello';
        }
        return QueryComponent;
    }());
    angular.module('ambAlgoWebApp')
        .component('query', {
        templateUrl: 'app/query/query.html',
        controller: QueryComponent
    });
})();
//# sourceMappingURL=query.controller.js.map