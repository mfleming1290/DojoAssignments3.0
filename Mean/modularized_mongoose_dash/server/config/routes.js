var otters = require('../controllers/otters.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        otters.show(req,res)
    })
    app.get('/mongooses/:id', function(req, res) {
        otters.one(req, res, req.params.id)
    })
    app.get('/mongoose/new', function(req, res) {
          res.render('new');
    });
    app.get('/mongoose/edit/:id', function(req, res) {
        otters.edit(req,res, req.params.id)

    });
    app.post('/edited/:id', function(req, res) {
        otters.editone(req,res,req.params.id)
    });
    app.post('/delete/:id', function(req, res) {
        otters.delete(req,res,req.params.id)
    });
    app.post('/mongooses', function(req, res) {
      otters.new(req,res)
    })
}
