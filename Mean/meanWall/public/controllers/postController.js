angular.module('app')
    .controller('postController',
        ['$scope', '$routeParams', '$location', 'postFactory', 'authService', '$cookies', '$route',
            function($scope, $routeParams, $location, pf, auth, $cookies, $route) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }

                $scope.posts = [];
                $scope.post = {};
                $scope.createPost = function functionName(newPost) {
                    console.log("creating postController");
                    console.log(newPost);
                    pf.createPost(newPost, function(errorsArray, post) {
                        if (errorsArray) {
                            return displayErrors(errorsArray);
                        }
                        $route.reload();
                    });

                };

                $scope.getPosts = function() {
                    pf.getPosts(function(posts) {
                        $scope.posts = posts;
                    })
                };





                function displayErrors(errorArrayOrString) {
                    $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString] ;
                }
            }
        ]
);
