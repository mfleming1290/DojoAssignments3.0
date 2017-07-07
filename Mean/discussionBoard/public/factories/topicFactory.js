console.log("factory");
angular.module('app')
    .factory('topicFactory', ['$http', '$cookies', function($http, $cookies) {
        const factory = {};
        factory.topics = [];
        factory.getTopics = function(callbackToController) {
            $http.get('/topics')
            .then(function(res) {
                console.log('post:', res.data);
                factory.topics = res.data;
                callbackToController(factory.topics);
            })
            .catch(console.log);
        };


        factory.createTopic = function(newTopic, callback) {
            console.log("inside factory creating");
            console.log(newTopic);
            $http.post('/topics', newTopic)
            .then(function(res) {
                console.log(`got post`);
                factory.topics.push(res.data);
                callback(null, res.data)
            })
            .catch(function(errorResponse) {
                console.log(errorResponse);
                callback(errorResponse.data);
            })
        }
        factory.getTopic = function(id, callback) {
            const topic = getTopicById(id)
            if (topic) {
                return callback(null, topic)
            }
            $http.get('/topics/' + id)
            .then(function(res) {
                console.log("response:", res);
                factory.topics.push(res.data)
                callback(null, res.data);
            })
            .catch(function(errorResponse) {
                callback(errorResponse.data);
            })
        };
        function getTopicById(id) {
            return factory.topics.find(topic => topic._id === id)
        }


        return factory;
    }])
