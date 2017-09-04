const gameController = require('../../controllers/game');
const router = require('express').Router();

module.exports = router
    .get('/', gameController.index)
    .post('/', gameController.create)
    .post('/add', gameController.add)
    .put('/:id', gameController.update)
    .get('/:id', gameController.show)
    .delete('/:id', gameController.destroy);
    