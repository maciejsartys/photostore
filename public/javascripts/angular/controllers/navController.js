/* global app */
(function() {
app.controller('NavController', ['$scope', '$location', 'auth',
    function($scope, $location, auth) {

        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.logOut = auth.logOut;
        $scope.currentUser = auth.currentUser();

        $scope.goToUserAccount = function() {
          $location.url('/account');
        }

        $scope.$on('userLoggedIn', function(user) {
            $scope.currentUser = auth.currentUser();
        });
    }
]);
})()
