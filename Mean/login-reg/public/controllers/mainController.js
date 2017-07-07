angular.module('app')
    .controller('mainController', ['$scope', '$location', 'userService', 'authService',
        function($scope, $location, userService, auth) {

            $scope.errors;
            $scope.login = function() {
                userService.login($scope.user)
                    .then(function() {
                        $location.path('/success');
                    })
                    .catch(function(res) {
                        console.log(res);
                        $scope.errors = res.data;
                    })
            };

            $scope.register = function() {
                userService.register($scope.user)
                    .then(function() {
                        $location.path('/success')
                    })
                    .catch(function(res) {
                        console.log(res);
                        $scope.errors = res.data;
                    })
            }
            $scope.logout = function functionName() {
                auth.logout()
                .then(function() {
                    $location.path('/')
                })
                .catch(console.log)
            }
            if (auth.isAuthed()) {
                return $location.path('/success')
                console.log("is logged in");
            }
            else {
                return $location.path('/')
                console.log("is not logged in");
            }
        }
    ]
);
