/*global app*/

app.controller('AuthController', ['$scope', '$location', 'auth',
    function($scope, $location, auth) {

        $scope.user = {};

        $scope.register = function() {
            auth.register($scope.user).then(function() {
                $location.url('/');
            }, function(err) {
                $scope.error = err.data;
            });
        };

        $scope.logIn = function() {
            auth.logIn($scope.user).then(function() {
                $location.url('/');
            }, function(err) {
                $scope.error = err.data;
            });
        };
    }
]);