angular.module('app')
    .controller('NavController', ['$scope', '$location', '$route', 'authService',
        function($scope, $location, $route, auth){
            $scope.isAuthed = auth.isAuthed();

            $scope.logout = function() {
                console.log('logged out');
                auth.logout()
                    .then(function() {
                        console.log('reloading');
                        $route.reload();
                    })
                    .catch(function(errorResponse) {
                        // handle error
                        console.log('got an error logging out');
                    });
            }


        }])
