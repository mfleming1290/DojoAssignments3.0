console.log('app');
angular.module('app', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/_index.html'
        })
        .when('/topics', {
            templateUrl: 'partials/_topics.html',
            controller: 'topicController'
        })
        .when('/topics/:id', {
            templateUrl: '/partials/_show.html',
            controller: 'topicController'
        })

        .otherwise('/')
    }])
