angular.module('app')
    .controller('mainController', ['$scope', '$location', 'userService', 'authService',
        function($scope, $location, userService, auth) {

            $scope.login = function() {
                userService.login($scope.user)
                    .then(function() {
                        $location.path('/success');
                    })
                    .catch(console.log)
            };

            $scope.register = function() {
                userService.register($scope.user)
                    .then(function() {
                        $location.path('/success')
                    })
                    .catch(console.log)
            }
            $scope.logout = function functionName() {
                authService.delete()
                .then(function() {
                    $location.path('/')
                })
                .catch(console.log)
            }
        }
    ]
);
