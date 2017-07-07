//****** Routes ******
myAppModule.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/players.html',
        controller: 'playerController'
    })
    .when('/teams',{
        templateUrl: 'partials/teams.html',
        controller: 'teamController'
    })
    .when('/asso',{
        templateUrl: 'partials/associations.html',
        controller: 'associationController',
    })
    .when('/:teamname',{
      templateUrl: 'partials/team.html',
      controller: 'teamController'
     })
    .otherwise({
        redirectTo: '/'
    });
});
