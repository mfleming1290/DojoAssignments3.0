angular.module('app')
    .controller('beltController', ['$scope', '$routeParams', '$location', 'beltFactory',
        function($scope, $routeParams, $location, bf) {
            $scope.newBelt = function(belt) {
                bf.newBelt(belt, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    $location.path('/belts');
                });
            };

            $scope.getBelts = function() {
                bf.getBelts(function(belts) {
                    $scope.belts = belts
                });
            };
        }
    ]
);
