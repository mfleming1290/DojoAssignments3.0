console.log("factory");
angular.module('app')
    .factory('commentFactory', ['$http', '$cookies', function($http, $cookies) {
        const factory = {};

        factory.createComment = function(newComment, postID, callback) {
            console.log("inside factory creating");
            console.log(newComment, postID);
            $http.post('/comments/' + postID ,newComment)
            .then(function(res) {
                console.log(`got post`);
                callback(null, res.data)
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
                callback(errorResponse.data);
            })
        };

        return factory;
    }])
