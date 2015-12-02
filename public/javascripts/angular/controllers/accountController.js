/* global app */

(function() {
  app.controller('AccountController', ['$scope', '$location', '$http' ,'auth',
    function($scope, $location, $http, auth) {
      $scope.section = 'account_details';

      if (!auth.isLoggedIn()) {
        $location.url('/');
      } else {
        var user = auth.currentUser();
        $scope.userDetails = $http.get('/users/' + user + '/private',
      { headers: {Authorization: 'Bearer ' + auth.getToken()}})
        .then(function success(res) {
          $scope.user = res.data;
          console.log(res.data);
        }, function err(res) {
          $scope.err = res.data;
        });
      }

    }]);
})()
