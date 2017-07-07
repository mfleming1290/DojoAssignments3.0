console.log('app');
angular.module('app', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/notes',{
            templateUrl: '/partials/notes/_index.html',
            controller: 'noteController'
        })
        .when('/notes/new', {
            templateUrl: '/partials/notes/_new.html',
            controller: 'noteController'
        })
        .when('/notes/:id', {
            templateUrl: '/partials/notes/_show.html',
            controller: 'noteController'
        })
        .when('/notes/:id/edit', {
            templateUrl: '/partials/notes/_edit.html',
            controller: 'noteController'
        })

        .otherwise('/notes')
    }])
