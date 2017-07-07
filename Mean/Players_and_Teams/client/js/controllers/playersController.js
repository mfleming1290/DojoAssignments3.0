//****** Player controller ******

var myAppModule = myAppModule.controller('playerController', ['$scope', 'playerFactory','$location', function ($scope, playerFactory, $location){
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
