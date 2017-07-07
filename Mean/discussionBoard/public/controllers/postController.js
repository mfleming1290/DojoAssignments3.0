angular.module('app')
    .controller('postController',
        ['$scope', '$routeParams', '$location', 'postFactory', 'authService', '$cookies', '$route',
            function($scope, $routeParams, $location, pf, auth, $cookies, $route) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }

                $scope.post = {};
                $scope.createPost = function(newPost , topicID) {
                    console.log("creating postController");
                    console.log(newPost);
                    pf.createPost(newPost, topicID, function(errorsArray, topic) {
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
