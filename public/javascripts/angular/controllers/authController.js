/*global app*/
(function() {
app.controller('AuthController', ['$scope', '$location', 'auth', '$rootScope',
    function($scope, $location, auth, $rootScope) {

        $scope.user = {};

        $scope.register = function() {
            auth.register($scope.user).then(function() {
                $rootScope.$broadcast('userLoggedIn', $scope.user);
                $location.url('/');
            }, function(err) {
                $scope.error = err.data;
            });
        };

        $scope.logIn = function() {
            auth.logIn($scope.user).then(function() {
                $rootScope.$broadcast('userLoggedIn', $scope.user);
                $location.url('/');
            }, function(err) {
                $scope.error = err.data;
            });
        };

        $scope.currentUser = function() {
            return $scope.user;
        }
    }
]);
})()
