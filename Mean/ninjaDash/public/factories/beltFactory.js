angular.module('app')
    .factory('beltFactory', ['$http', function($http) {
        return {
            belts: [],
            getBelts(callback) {
                $http.get('/belts')
                    .then(res => {
                        console.log(res.data);
                        this.belts = res.data;
                        callback(this.belts);
                    })
                    .catch(console.log)
            },
            newBelt(belt, callback) {
                $http.post('/belts', belt)
                .then(res =>{
                    this.belts.push(res.data);
                    callback(null);
                })
                .catch(console.log);
            }
        };
    }]);
