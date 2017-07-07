var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
    index: function(req, res) {
        var users = User.find({}, function (err, data) {
            if (err) {
                res.json (err);
                return;
            }
            res.json(data);
        });
    },
    create: function(req, res) {
        var user = new User(req.body);
        user.save(function (err, aUser) {
            if (err) {
                res.json (err);
                return;
            }
            res.json(aUser);
        });
    }
}
