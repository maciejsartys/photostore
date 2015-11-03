/* global app */
(function() {
app.controller('NavController', ['$scope', 'auth',
    function($scope, auth) {

        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.logOut = auth.logOut;
        $scope.currentUser = auth.currentUser();
        
        $scope.$on('userLoggedIn', function(user) {
            console.log(new Date() + 'recieved');
            $scope.currentUser = auth.currentUser();
        });
    }
]);
})()
