var myAppModule = angular.module('app', ['ngRoute']);
myAppModule.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/customizeUsers.html',
        controller: 'CustomizeUsersController'
    })
    .when('/list',{
        templateUrl: 'partials/userList.html',
        controller: 'UserListsController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
myAppModule.factory('userFactory', ['$http', function($http) {
    var factory = {};
    var users = [
        {first_name: 'Ryan', last_name: 'Dahl', fav_lang: 'Javascript'},
        {first_name: 'Matt', last_name: 'Fleming', fav_lang: 'Javascript'},
        {first_name: 'Danni', last_name: 'Karas', fav_lang: 'Javascript'}
    ];

    factory.getUsers = function (callback){
        callback(users);
    }

    factory.addUser = function (user, callback){
       users.push(user);
       callback(users);
    }
    factory.deleteUser = function(val, callback){
      delete users[val];
      callback(users);
      }


    return factory;
}]);

myAppModule.controller('CustomizeUsersController', ['$scope', 'userFactory','$location', function ($scope, userFactory, $location){
    function setUsers(data){
        $scope.users = data;
        $scope.newUser = {};
     }

     $scope.users = [];

     userFactory.getUsers(setUsers);

     $scope.addUser = function(){
         userFactory.addUser($scope.newUser, setUsers);
         $location.url('/list');
       }

     $scope.deleteUser = function(id){
         userFactory.deleteUser(id,setUsers);
     }

}]);

myAppModule.controller('UserListsController', ['$scope', 'userFactory', function ($scope, userFactory){
    function setUsers(data){
        $scope.users = data;
        $scope.newUser = {};
     }
     $scope.users = [];
     userFactory.getUsers(setUsers)
}]);
