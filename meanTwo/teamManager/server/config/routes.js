const PlayerController = require('../controllers/players');
const path = require('path');

module.exports= function(app) {
    app.get('/players', PlayerController.index)
       .post('/players', PlayerController.create)
       .delete('/players/:id', PlayerController.delete)
       app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
      });
}
