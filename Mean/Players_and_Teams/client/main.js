//****** Routes ******
var myAppModule = angular.module('app', ['ngRoute']);
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
    .otherwise({
        redirectTo: '/'
    });
});
//******Player Factory*******
myAppModule.factory('playerFactory', ['$http', function($http) {
    var factory = {};
    var players = [
        {name: 'Speros', team:"Seahawks"},
        {name: 'Jimmy'},
        {name: 'Jay'},
        {name:"Kris", team:"49ers"}
    ];

    factory.getPlayers = function (callback){
        callback(players);
    }

    factory.addPlayer = function (player){
       players.push(player);
    }
    factory.deletePlayer = function(val){
      delete players[val];
      }

    factory.addPlayerToTeam = function(data) {
        players[data.playerIdx].team = data.team;
    }
    factory.removePlayerFromTeam = function(val) {
        players[val].team = " "
    }
    return factory;
}]);
//****** Player controller ******
myAppModule.controller('playerController', ['$scope', 'playerFactory','$location', function ($scope, playerFactory, $location){
     $scope.players = [];
     playerFactory.getPlayers(function(players){
         $scope.players = players
     });


     $scope.addPlayer = function(){
         playerFactory.addPlayer($scope.newPlayer);
       }

     $scope.deletePlayer = function(id){
         playerFactory.deletePlayer(id);
     }

}]);


//******Team Factory*******
myAppModule.factory('teamFactory', ['$http', function($http) {
    var factory = {};
    var teams = [
        {name: 'Seahawks'},
        {name: '49ers'},
        {name: 'Honeybadgers'}
    ];

    factory.getTeams = function (callback){
        callback(teams);
    }

    factory.addTeam = function (team){
       teams.push(team);
    }
    factory.deleteTeam = function(val){
      delete teams[val];
      }

    return factory;
}]);

//****** Team controller ******
myAppModule.controller('teamController', ['$scope', 'teamFactory','$location', function ($scope, teamFactory, $location){
     $scope.teams = [];
     teamFactory.getTeams(function(teams){
         $scope.teams = teams
     });

     $scope.addTeam = function(){
         teamFactory.addTeam($scope.newTeam);
       }

     $scope.deleteTeam = function(id){
         teamFactory.deleteTeam(id);
     }

}]);
//****** association controller ******
myAppModule.controller('associationController', ['$scope', 'playerFactory', 'teamFactory' ,'$location', function ($scope, playerFactory, teamFactory, $location){
    $scope.players = [];
    $scope.teams = [];

    teamFactory.getTeams(function(teams){
        $scope.teams = teams
    });

    playerFactory.getPlayers(function(players){
        $scope.players = players
    });

    $scope.addPlayerToTeam = function(){
        playerFactory.addPlayerToTeam($scope.newAssoc)
    }
    $scope.removePlayerFromTeam = function(val) {
        playerFactory.removePlayerFromTeam(val)
    }
}]);
