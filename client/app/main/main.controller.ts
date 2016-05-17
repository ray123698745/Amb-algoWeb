'use strict';

(function() {
  
class MainController {

  constructor($http, Auth) {
    this.$http = $http;
    this.awesomeThings = [];
    this.isLoggedIn = Auth.isLoggedIn;  
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });

      if(this.isLoggedIn){

//           document.getElementById("bt").click();
//           document.getElementById("test").innerHTML = "hi";
      }
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

  open() {
      // var modalInstance = $modal.open({
      //     templateUrl: 'popup.html',
      // });
      var test;
      test = 1+1;
    return test;
  }

}

angular.module('ambAlgoWebApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
