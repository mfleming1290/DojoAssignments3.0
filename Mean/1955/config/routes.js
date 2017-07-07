// ****** controllers ******
var peopleController = require('./../controllers/people.js')

module.exports = function(app){
//****** routes ******
// app.get('/', function(req, res) {
//     res.json({key:'value'});
// })
app.get('/', peopleController.index);
app.get('/new/:name', peopleController.create);
app.get('/remove/:name', peopleController.remove);
app.get('/:name', peopleController.one);
}
