(function() {
        'use strict';

    describe('NavController', function () {

        var controller;
        var $scope, auth;

        auth = {
            'currentUser': function() {return "testUser" }
        };

        beforeEach(module('photoStore'));

        beforeEach(function() {

            inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();

            controller =  $controller('NavController', {
                $scope: $scope,
                auth: auth
            });
        })});

        it('show show current user if logged in', function() {
            expect($scope.currentUser).toBe("testUser");
        });
    });
})()