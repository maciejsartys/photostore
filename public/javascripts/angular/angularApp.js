/*global angular*/
var app = angular.module('photoStore', ['ngRoute'])
.config(['$routeProvider',
function($routeprovider) {
  $routeprovider
  .when('/index', {
    templateUrl: './views/index.html',
    controller: "CatalogueController"
  })
  .when('/register', {
    templateUrl: "./views/register.html",
    controller: "AuthController"
  })
  .when('/login', {
    templateUrl: './views/login.html',
    controller: "AuthController"
  })
  .otherwise({
    redirectTo: '/index'
  });
}
]);
