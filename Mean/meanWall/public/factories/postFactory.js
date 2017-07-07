console.log("factory");
angular.module('app')
    .factory('postFactory', ['$http', '$cookies', function($http, $cookies) {
        const factory = {};
        factory.userID = $cookies.get('userID');
        factory.posts = [];
        factory.getPosts = function(callbackToController) {
            $http.get('/posts')
            .then(function(res) {
                console.log('post:', res.data);
                factory.posts = res.data;
                callbackToController(factory.posts);
            })
            .catch(console.log);
        };


        factory.createPost = function(newPost, callback) {
            console.log("inside factory creating");
            console.log(newPost);
            $http.post('/posts', newPost)
            .then(function(res) {
                console.log(`got post`);
                factory.posts.push(res.data);
                callback(null, res.data)
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
                callback(errorResponse.data);
            })
        };

        return factory;
    }])
