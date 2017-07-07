angular.module('app', ['ngRoute', 'ngCookies'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/_index.html',
            controller: 'indexController'
        })
        .when('/customers',{
            templateUrl: '/partials/_customers.html',
            controller: 'customerController'
        })
        .when('/products', {
            templateUrl: '/partials/_products.html',
            controller: 'productController'
        })
        .when('/orders', {
            templateUrl: '/partials/_orders.html',
            controller: 'orderController'
        })
        .otherwise('/')
    }])
