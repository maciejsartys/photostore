/* global app */
(function() {
  app.controller('MainController', ['$scope', '$location', 'auth',
  function($scope, $location, auth) {
    /*if(!auth.isLoggedIn()) {
    $location.url('/#/login');
  }*/

  $scope.title = "Photostore";
}
]);
})()
