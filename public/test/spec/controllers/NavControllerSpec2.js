/*global describe, it, beforeEach, inject, expect*/

(function() {
    'use strict';

    describe('NotNavController', function () {

        var controller;
        var $scope;

        beforeEach(module('photoStore'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();

            controller = $controller;

            controller('NotNavController', {
                $scope: $scope
            });
        }));

        it('test should be test', function() {
            expect($scope.test).toBe(0);
            $scope.add();
            expect($scope.test).toBe(1);
        });
    });
})()