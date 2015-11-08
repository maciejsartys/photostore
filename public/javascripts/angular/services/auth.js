/* global app */

(function() {
  app.factory('auth', ['$http', '$window', function($http, $window) {
    var auth = {};

    auth.saveToken = function(token) {
      auth.username = auth.decodeUsername(token);
      $window.localStorage['photoStoreToken'] = token;
    }

    auth.getToken = function() {
      return $window.localStorage['photoStoreToken'];
    };

    auth.isLoggedIn = function() {
      var token = auth.getToken();

      if (token) {
        try {
          var payload = auth.decodeUsername(token);
        }
        catch (e) {
          this.logOut();
          return false;
        }
        return payload.exp > Date.now() / 1000;
      }
      else {
        return false;
      }
    };

    auth.register = function(user) {
      return $http.post('/users/register', user).then(function(response) {
        auth.saveToken(response.data.token);
      }, function(err) {
        throw err;
      });
    };

    auth.logIn = function(user) {
      return $http.post('/users/login', user).then(function(response) {
        auth.saveToken(response.data.token);
      });
    };

    auth.currentUser = function() {
      if (auth.isLoggedIn()) {
        var token = auth.getToken();
        var payload = this.decodeUsername(token);

        return payload.username;
      }
    };

    auth.logOut = function() {
      $window.localStorage.removeItem('photoStoreToken');
    };

    auth.decodeUsername = function(token) {
      return JSON.parse($window.atob(token.split('.')[1]));
    }

    return auth;

  }]);
})()
