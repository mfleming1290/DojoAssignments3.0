angular.module('app')
    .controller('ninjaController',
        ['$scope', '$routeParams', 'ninjaFactory', '$location', 'beltFactory', 'authService',
            function($scope, $routeParams, ninjaFactory, $location, bf, auth) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }

                $scope.ninjas = [];
                $scope.ninja = {};
                $scope.createNinja = function functionName(newNinja) {
                    console.log("creating ninjaController");
                    console.log(newNinja);
                    ninjaFactory.createNinja(newNinja, function(errorsArray, ninja) {
                        if (errorsArray) {
                            return displayErrors(errorsArray);
                        }
                        $location.path('/ninjas');
                    });

                };

                $scope.getNinjas = function() {
                    ninjaFactory.getNinjas(function(ninjas) {
                        $scope.ninjas = ninjas;
                    })
                };
                $scope.getNinja = function() {
                    ninjaFactory.getNinja($routeParams.id, function(err, ninja) {
                        if (err) {
                            return $location.path('/ninjas')
                        }
                        $scope.ninja = angular.copy(ninja);
                        $scope.getBelts()
                    });

                };

                $scope.updateNinja = function() {
                    ninjaFactory.updateNinja($scope.ninja, function(ninja) {

                        $location.path('/ninjas/' + ninja._id);
                    }, function(error) {
                        displayErrors(error);
                    })

                };

                $scope.deleteNinja = function(id) {
                    ninjaFactory.deleteNinja(id, displayErrors);
                };

                $scope.getBelts = function() {
                    bf.getBelts(function(belts) {
                        $scope.belts = belts;
                    })
                }

                function displayErrors(errorArrayOrString) {
                    $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString] ;
                }
            }
        ]
);
