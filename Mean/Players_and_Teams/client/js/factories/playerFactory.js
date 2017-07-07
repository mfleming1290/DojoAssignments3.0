//******Player Factory*******
var myAppModule = angular.module("app", ["ngRoute", 'ngMessages']);

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
