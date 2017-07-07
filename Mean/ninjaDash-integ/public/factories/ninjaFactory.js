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
            const ninja = getNinjaById(id)
            if (ninja) {
                return callback(null, ninja)
            }
            $http.get('/ninjas/' + id)
            .then(function(res) {
                factory.ninjas.push(res.data);
                callback(null, res.data)
            })
        };
        function getNinjaById(id) {
            return factory.ninjas.find(ninja => ninja._id === id)
        }

        function removeNinjaById(id, ...insert) {
            const ninja = getNinjaById(id)
            if (ninja) {
                factory.ninjas.splice(factory.ninjas.indexOf(ninja), 1, ...insert);
            }
            return ninja;
        }

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

        factory.updateNinja = function(ninja, callback) {
            $http.put('/ninjas/' + ninja._id, ninja)
            .then(function(res) {
                console.log(factory.ninjas);
                removeNinjaById(ninja._id, res.data);
                callback(null, res.data)
            })
            .catch(console.log)
        };

        factory.deleteNinja = function(id, callback) {
            $http.delete('/ninjas/' + id)
            .then(function(res) {
                removeNinjaById(id)
                callback(null)
            })
            .catch(console.log)
        };


        return factory;
    }])
