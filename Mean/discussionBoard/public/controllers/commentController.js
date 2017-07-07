angular.module('app')
    .controller('commentController',
        ['$scope', '$routeParams', '$location', 'commentFactory', 'authService', '$cookies', '$route',
            function($scope, $routeParams, $location, pf, auth, $cookies, $route) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }

                $scope.post = {};
                $scope.createComment = function(newComment , postID, topicID) {
                    var comment = {
                      comment: this.newComment,
                      _post: this.post._id,
                      _user: auth.currentUserId(),
                      _topic: this.topic._id
                    }
                    console.log("creating postController with comment", comment);
                    pf.createComment(newComment, postID, function(errorsArray, post) {
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
