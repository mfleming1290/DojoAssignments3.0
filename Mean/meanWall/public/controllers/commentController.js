angular.module('app')
    .controller('commentController',
        ['$scope', '$routeParams', '$location', 'commentFactory', 'authService', '$cookies', '$route',
            function($scope, $routeParams, $location, cf, auth, $cookies, $route) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }

                $scope.comment = {};
                $scope.createComment = function(newComment , postID) {
                    console.log("creating commentController");
                    console.log(newComment);
                    cf.createComment(newComment, postID, function(errorsArray, post) {
                        if (errorsArray) {
                            return displayErrors(errorsArray);
                        }
                        $route.reload();
                    });

                };





                function displayErrors(errorArrayOrString) {
                    $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString] ;
                }
            }
        ]
);
