var mongoose = require('mongoose');
var User = mongoose.model('User')
var quotes = require('../controllers/quotes.js');
mongoose.Promise = global.Promise;



// Routes
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    })
    app.get('/quotes', function(req, res) {
        quotes.show(req, res)
    })
    app.post('/users', function(req, res) {
      quotes.create(req, res)
    })
}
