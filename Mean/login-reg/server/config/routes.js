const authController = require('../controllers/auth');

module.exports = function(app) {
    console.log('routes');
    app.post('/auth/login', authController.login)
        .post('/auth/register', authController.register)
        .delete('/auth/logout', authController.logout);
}
