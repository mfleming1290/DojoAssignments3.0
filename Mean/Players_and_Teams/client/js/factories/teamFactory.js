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
