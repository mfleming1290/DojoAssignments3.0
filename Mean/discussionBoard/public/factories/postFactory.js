console.log("factory");
angular.module('app')
    .factory('postFactory', ['$http', '$cookies', function($http, $cookies) {
        const factory = {};

        factory.createPost = function(newPost, topicID, callback) {
            console.log("inside factory creating");
            console.log(newPost, topicID);
            $http.post('/posts/' + topicID ,newPost)
            .then(function(res) {
                console.log(`got post`);
                callback(null, res.data)
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
                callback(errorResponse.data);
            })
        };
        factory.getPosts = function() {
            tf.getPosts(function(topics) {
                $scope.topics = topics;
            })
        };
        factory.readPosts = function(id, callback) {
		$http.get('/posts/'+id)
        .then(function(res) {
            console.log(res.data);
            callback(res.data)
        })
        .catch(function(errorResponse) {
            console.log(errorResponse);
            callback(errorResponse.data);
        })
	}


        return factory;
    }])
