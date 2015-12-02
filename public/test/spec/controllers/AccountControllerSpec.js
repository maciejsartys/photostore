(function() {
        'use strict';

    describe('AccountController', function () {

        var controller;
        var $scope, auth;

        auth = {
            currentUser: function() {
            return 'testuser'
          },
            isLoggedIn: function() {
              return true;
            }
        };

        beforeEach(module('photoStore'));

        beforeEach(function() {

            inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();

            controller =  $controller('AccountController', {
                $scope: $scope,
                auth: auth
            });
        })});

        it('Show user details', function() {
            expect($scope.user.username).toBe('testuser');
            expect($scope.user.email).toBe('testuser@test.com');
        });
    });
})()
