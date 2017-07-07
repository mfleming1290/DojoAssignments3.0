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
                        $scope.ninja = ninja;
                    })
                };

                $scope.updateNinja = function(ninja) {
                    console.log(ninja);
                    ninjaFactory.updateNinja($routeParams.id, ninja, function(data) {
                        console.log(data);
                        $location.path('/ninjas');
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
