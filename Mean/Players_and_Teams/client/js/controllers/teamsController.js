//****** Team controller ******

var myAppModule = myAppModule.controller('teamController', ['$scope', 'teamFactory','$location', '$routeParams', function ($scope, teamFactory, $location, $routeParams){
     console.log($routeParams);
     $scope.param = $routeParams.teamname;
     console.log($scope.param);
     $scope.teams = [];
     $scope.team = $routeParams.teamname;
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
