angular.module('app')
    .service('authService', ['$http', '$cookies', function($http, $cookies) {
        this.isAuthed = function() {
            var expired = $cookies.get('expiration');
            var userID = $cookies.get('userID');
            var session = $cookies.get('currentUser');

            return userID && session && expired > Date.now();
        };

        this.currentUserId = function() {
            return $cookies.get('userID')
        };

        this.logout = function() {
            return $http.delete('/auth/logout')
        };
    }])
