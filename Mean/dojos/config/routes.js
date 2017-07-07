// ****** controllers ******
var dojosController = require('./../controllers/dojos.js')
var usersController = require('./../controllers/users.js')

module.exports = function(app){
//****** routes ******
app.get('/', function(req, res) {
    res.json({key:'value'});
})
app.get('/users', usersController.index);
app.post('/users', usersController.create);
app.get('/dojos', dojosController.index);
app.get('/dojos:id', dojosController.show);
app.post('/dojos', dojosController.create);
}
