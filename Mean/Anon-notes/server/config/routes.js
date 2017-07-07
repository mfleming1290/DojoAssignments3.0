const noteController = require('../controllers/notes');

module.exports = function(app) {
    console.log('routes');
    app.get('/notes', noteController.index)
        .post('/notes', noteController.create)
}
