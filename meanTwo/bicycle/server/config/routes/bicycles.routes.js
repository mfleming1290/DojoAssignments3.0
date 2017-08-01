const bikeController = require('../../controllers/bicycles');
const router = require('express').Router();

module.exports = router
    .get('/', bikeController.index)
    .post('/', bikeController.create)
    .get('/random', bikeController.findOne)
    .get('/listing', bikeController.getBikesById)
    .put('/:id', bikeController.update)
    .get('/:id', bikeController.show)
    .delete('/:id', bikeController.destroy);
    