/* global app */

app.controller('NotNavController', ['$scope',
    function($scope) {
    	$scope.add = function() {
    		$scope.test += 1;
    	}

    	$scope.test = 0;

    }
]);

