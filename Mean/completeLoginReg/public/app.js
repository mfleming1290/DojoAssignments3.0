console.log('app');
angular.module('app', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/_index.html'
        })
        .when('/success', {
            templateUrl: 'partials/_success.html'
        })

        .otherwise('/')
    }])
