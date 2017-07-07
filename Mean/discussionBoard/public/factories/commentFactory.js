console.log("factory");
angular.module('app')
    .factory('commentFactory', ['$http', '$cookies', function($http, $cookies) {
        const factory = {};

        factory.createComment = function(comment, callback) {
            console.log("inside factory creating", comment);
            $http.post('/comments/', comment)
            .then(function(res) {
                console.log(`got post`);
                callback(null, res.data)
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
                callback(errorResponse.data);
            })
        };

        factory.readComments = function(id, callback) {
        console.log('reading comments in factory');
		$http.get('/comments/'+id)
        .then(function(res) {
            console.log('res', res.data);
            callback(res.data)
        })
        .catch(function(errorResponse) {
            console.log(errorResponse);
            callback(errorResponse.data);
        })
	}


        return factory;
    }])
