angular.module('app')
    .controller('topicController',
        ['$scope', '$routeParams', '$location', 'topicFactory', 'authService', '$cookies', '$route', 'postFactory', 'commentFactory' ,
            function($scope, $routeParams, $location, tf, auth, $cookies, $route, pf, cf) {

                if (!auth.isAuthed()) {
                    return $location.path('/');
                }
                $scope.posts
                $scope.topics = [];
                $scope.topic = {};
                $scope.post = {};
                $scope.createTopic = function functionName(newTopic) {
                    console.log("creating topicController");
                    console.log(newTopic);
                    tf.createTopic(newTopic, function(errorsArray, topic) {
                        if (errorsArray) {
                            return displayErrors(errorsArray);
                        }
                        $route.reload();
                    });

                };
                $scope.getTopics = function() {
                    tf.getTopics(function(topics) {
                        $scope.topics = topics;
                    })
                };
                $scope.getTopic = function() {
                    tf.getTopic($routeParams.id, function(err, topic) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('controller', topic);
                        $scope.topic = angular.copy(topic);
                        pf.readPosts($routeParams.id, function(posts) {
                			$scope.posts = posts;
                		})
                        // cf.readComments($routeParams.id, function(comments) {
                        //     console.log(comments);
                		// 	$scope.comments = comments;
                		// })
                    });

                };
                // Post controlls
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
                // Comment controlls
                $scope.createComment = function(newComment , postID, topicID) {
                    console.log("topic id:", topicID);
                    var comment = {
                      comment: this.newComment,
                      _post: postID,
                      _user: auth.currentUserId(),
                      _topic: topicID
                    }
                    console.log("creating postController" , newComment);
                    cf.createComment(comment, function(errorsArray, post) {
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
