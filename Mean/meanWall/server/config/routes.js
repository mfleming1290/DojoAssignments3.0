const authController = require('../controllers/auth');
const postController = require('../controllers/post');
const commentController = require('../controllers/comment');

module.exports = function(app) {
    app.post('/auth/login', authController.login)
        .post('/auth/register', authController.register)
        .delete('/auth/logout', authController.logout)

        .get('/posts', postController.index)
        .post('/posts', postController.create)

        .post('/comments/:id', commentController.create)
}
