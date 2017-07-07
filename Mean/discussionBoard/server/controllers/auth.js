const User = require('mongoose').model('User');

module.exports = {
    login(req, res) {
        User.findOne({ username: req.body.username })
            .then(function(user) {
                if (!user) throw new Error('no credentials match')
                return User.verifyPassword(req.body.password, user.password)
                    .then(function() {
                        login(req, res, user);
                    })
            })
            .catch(function(err) {
                console.log(err);
            })
    },
    register(req, res) {
        User.create(req.body)
        .then(function(user) {
            login(req, res, user)
        })
        .catch(console.log);
    },
    logout(req, res) {
        req.session.destroy();
        res.clearCookie('userID')
        res.clearCookie('expiration')
        res.json({success: true});
    }
}

function login(req, res, user) {
    req.session.user = user.toObject();
    delete req.session.user.password;

    res.cookie('userID', user._id);
    res.cookie('expiration', Date.now() + 86400 * 1000);

    res.json(true);
}
