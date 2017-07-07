angular.module('app')
    .controller('userController', ['$scope', '$location', 'userService', 'authService',
        function($scope, $location, userService, authService) {
            // if (!authService.isAuthed()) {
            //     return $location.path('/')
            // }
            $scope.login = function() {
                userService.login($scope.user)
                    .then(function() {
                        $location.path('/posts');
                    })
                    .catch(console.log)
            };

            $scope.register = function() {
                userService.register($scope.user)
                    .then(function() {
                        $location.path('/posts')
                    })
                    .catch(console.log)
            }
            $scope.logout = function functionName() {
                console.log('controller logout');
                authService.logout()
                .then(function() {
                    $location.path('/')
                })
                .catch(console.log)
            }
        }
    ]
);
