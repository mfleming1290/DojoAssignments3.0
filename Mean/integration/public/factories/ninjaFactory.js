console.log("factory");
angular.module('app')
    .factory('ninjaFactory', ['$http', function($http) {
        const factory = {};
        factory.ninjas = [];
        factory.getNinjas = function(callbackToController) {
            $http.get('/ninjas')
            .then(function(res) {
                console.log(res.data);
                factory.ninjas = res.data;
                callbackToController(factory.ninjas);
            })
            .catch(console.log);
        };

        factory.getNinja = function(id, callback) {
            const ninja = factory.ninjas.find(ninja => ninja._id === id);
            if (ninja) {
                return callback(null, ninja)
            }
        };

        factory.createNinja = function(newNinja, callback) {
            console.log("inside factory creating");
            console.log(newNinja);
            $http.post('/ninjas', newNinja)
            .then(function(res) {
                console.log(`got ninja`);
                factory.ninjas.push(res.data);
                callback(res.data)
            })
            .catch(console.log)
        };

        factory.updateNinja = function(id, ninja, callback) {
            console.log("got to factory");
            $http.put('/ninjas/' + id, ninja)
            .then(function(res) {
                callback(res.data)
            })
            .catch(console.log)
        };

        factory.deleteNinja = function(id, callback) {
            $http.delete('/ninjas/' + id)
            .then(function(res) {
                const sacrifice = factory.ninjas.find(ninja => ninja._id === id)
                if (sacrifice) {
                    factory.ninjas.splice(factory.ninjas.indexOf(sacrifice), 1)
                }
                callback(null)
            })
            .catch(console.log)
        };


        return factory;
    }])
