const path = require('path');
const serverController = require('../controllers/servers');




module.exports = function(app) {

        app.get('/', serverController.index)
        .post('/', serverController.store)
        // .get('/:id', chatController.findChat)
        // .put('/:id,', chatController.update)
        // .delete('/:id', chatController.delete)
        app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
        });
}
