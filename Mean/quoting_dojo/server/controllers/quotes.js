var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    show: function(req, res) {
        User.find({}, function(err, users) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('got to page');
          res.render('quotes', {data: users});
        }
      })
  },
  create: function(req, res) {
      var user = new User({first_name: req.body.name, message: req.body.message});
      user.save(function(err) {
        if(err) {
          console.log('something went wrong');
          res.render('index', {title: 'you have errors!', errors: user.errors})
        } else {
          console.log('successfully added a user!');
          res.redirect('/quotes');
        }
      })
  }
}
