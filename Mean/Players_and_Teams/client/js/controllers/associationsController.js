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
