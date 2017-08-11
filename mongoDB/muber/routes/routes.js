const driversController = require('../controllers/driversController');
module.exports = (app) => {

    app.get('/api', driversController.greeting)
    app.post('/api/drivers', driversController.create);
    // app.put('/api');
    // app.delete('/api');


}
