const bookFindController = require('../../controllers/bookFind');
const router = require('express').Router();

module.exports = router
    .put('/', bookFindController.show)
    .get('/:id', bookFindController.search)
    
    