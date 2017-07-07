const Belt = require('mongoose').model('Belt');

module.exports = {
    index(req, res) {
        Belt.find({})
            .then(function(belts) {
                res.json(belts);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    show(req, res) {
        Belt.findById(req.params.id)
        .then(function(belt) {
            res.json(belt);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        Belt.create(req.body)
        .then(function(newBelt) {
            res.json(newBelt)
        })
        .catch(function(err) {
            console.log(err);
        })
    },
};
