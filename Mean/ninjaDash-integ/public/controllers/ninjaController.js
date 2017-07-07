angular.module('app')
    .controller('ninjaController',
        ['$scope', '$routeParams', 'ninjaFactory', '$location',
            function($scope, $routeParams, ninjaFactory, $location) {
                $scope.ninjas = [];
                $scope.ninja = {};
                $scope.createNinja = function functionName(newNinja) {
                    console.log("creating ninjaController");
                    console.log(newNinja);
                    ninjaFactory.createNinja(newNinja, function(ninja) {
                        $location.path('/ninjas');
                    })
                };

                $scope.getNinjas = function() {
                    ninjaFactory.getNinjas(function(ninjas) {
                        $scope.ninjas = ninjas;
                    })
                };
                $scope.getNinja = function() {
                    ninjaFactory.getNinja($routeParams.id, function(err, ninja) {
                        $scope.ninja = angular.copy(ninja);
                    })
                };

                $scope.updateNinja = function() {
                    ninjaFactory.updateNinja($scope.ninja, function(err, ninja) {
                        if (err) {
                            console.log(err);
                        }
                        $location.path('/ninjas/' + ninja._id);
                    })

                };

                $scope.deleteNinja = function(id) {
                    ninjaFactory.deleteNinja(id, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    })
                };
            }
        ]
);
