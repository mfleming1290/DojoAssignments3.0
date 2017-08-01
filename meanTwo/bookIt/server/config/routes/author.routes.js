const authorController = require('../../controllers/authors')
const router = require('express').Router();

module.exports = router
    .get('/', authorController.index)
    .post('/', authorController.create)
    .get('/:id', authorController.show)
    .put('/:id', authorController.update)
    .delete('/:id', authorController.destroy);

