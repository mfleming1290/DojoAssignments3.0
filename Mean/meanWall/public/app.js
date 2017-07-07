angular.module('app', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '/partials/_index.html'

        })
        .when('/posts', {
            templateUrl: '/partials/wall/_index.html',
            controller: 'postController'
        })


        .otherwise('/')
    }])
