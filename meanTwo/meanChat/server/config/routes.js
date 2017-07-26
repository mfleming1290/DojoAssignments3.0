const chatController = require('../controllers/chat');
const path = require('path');




module.exports = function(app) {

        app.get('/:room', chatController.room)
        .post('/chat/', chatController.create)
        .get('/chat/:id', chatController.findChat)
        .put('/chat/:id,', chatController.update)
        .delete('/chat/:id', chatController.delete)
        app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
        });
}
