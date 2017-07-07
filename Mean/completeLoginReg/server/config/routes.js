const authController = require('../controllers/auth');


module.exports = function(app) {
    console.log('routes');
     app.post('/auth/login', authController.login)
        .post('/auth/register', authController.register)
        .delete('/auth/logout', authController.logout)

        // .get('/belts', beltController.index)
        // .post('/belts', beltController.create)
        // .get('/belts/:id', beltController.show);

        // .get('/ninjas', ninjaController.index)
        // .get('/ninjas/:id', ninjaController.show)
        // .post('/ninjas', ninjaController.create)
        // .put('/ninjas/:id', ninjaController.update)
        // .delete('/ninjas/:id', ninjaController.delete)
}
