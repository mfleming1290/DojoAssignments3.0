const authController = require('../controllers/auth');
const topicController = require('../controllers/topic');
const postController = require('../controllers/post');
const commentController = require('../controllers/comment');




module.exports = function(app) {
    console.log('routes');
     app.post('/auth/login', authController.login)
        .post('/auth/register', authController.register)
        .delete('/auth/logout', authController.logout)

        .get('/topics', topicController.index)
        .post('/topics', topicController.create)
        .get('/topics/:id', topicController.show)

        .get('/posts/:id', postController.show)
        .post('/posts/:id', postController.create)

        // .get('/comments/:id', commentController.show)
        .post('/comments/', commentController.create)
}
