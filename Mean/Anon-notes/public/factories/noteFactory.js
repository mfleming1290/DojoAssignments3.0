console.log("factory");
angular.module('app')
    .factory('noteFactory', ['$http', function($http) {
        const factory = {};
        factory.notes = [];
        factory.getNotes = function(callbackToController) {
            $http.get('/notes')
            .then(function(res) {
                console.log(res.data);
                factory.notes = res.data;
                callbackToController(factory.notes);
            })
            .catch(console.log);
        };

        factory.createNote = function(newNote, callback) {
            console.log("inside factory creating");
            console.log(newNote);
            $http.post('/notes', newNote)
            .then(function(res) {
                console.log(`got note`);
                factory.notes.push(res.data);
                callback(res.data)
            })
            .catch(console.log)
        };

        return factory;
    }])
