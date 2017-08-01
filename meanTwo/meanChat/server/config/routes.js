const chatController = require('../controllers/chat');
const path = require('path');




module.exports = function(app) {

        app.get('/:room', chatController.room)
        .post('/', chatController.create)
        .get('/:id', chatController.findChat)
        .put('/:id,', chatController.update)
        .delete('/:id', chatController.delete)
        app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
        });
}
