var mongoose = require('mongoose')
var People = mongoose.model('people')

module.exports = {
    index: function(req, res) {
        var people = People.find({}, function (err, data) {
            if (err) {
                res.json (err);
                return;
            }
            res.json(data);
        });
    },
    create: function(req, res) {
        var people = new People({name: req.params.name});
        people.save(function (err, aUser) {
            if (err) {
                res.json (err);
                return;
            }
            res.json(aUser);
        });
    },
    remove: function(req, res) {
        People.remove({name : req.params.name}, function(err, result) {
            if(err) {
              console.log('something went wrong');
            } else {
              console.log('updated info');
              res.redirect('/');
            }
        })
    },
    one: function(req, res) {
        var people = People.find({name: req.params.name}, function (err, data) {
            if (err) {
                res.json (err);
                return;
            }
            res.json(data);
        });
    }
}
