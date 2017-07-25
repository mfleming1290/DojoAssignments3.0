const noteController = require('../controllers/notes');

module.exports = function(app) {
    app.get('/notes', noteController.index)
        .post('/notes', noteController.create)
        app.all("*", (req,res,next) => {
            res.sendfile(path.resolve("./public/dist/index.html"))
        });
}