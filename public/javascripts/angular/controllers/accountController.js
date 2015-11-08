/* global app */

(function() {
  app.controller('AccountController', ['$scope', '$location', 'auth',
    function($scope, $location, auth) {
      $scope.user = {};
      $scope.section = 'account_details';

      if (!auth.isLoggedIn()) {
        $location.url('/');
      } else {
        $scope.user = auth.currentUser();
      }

    }]);
})()
