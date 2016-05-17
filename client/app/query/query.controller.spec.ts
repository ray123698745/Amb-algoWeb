'use strict';

describe('Component: QueryComponent', function () {

  // load the controller's module
  beforeEach(module('ambAlgoWebApp'));

  var QueryComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QueryComponent = $componentController('QueryComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
