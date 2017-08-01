const Author = require('mongoose').model('Author')
const errorHandler = require('./errors')

class AuthorsController {
    index(req, res) {
        Author.find({}).populate('books')
        .then(authors => res.json(authors))
        .catch(errorHandler.bind(res))
    }
    create(req, res) {
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(errorHandler.bind(res))

    }
    show(req, res) {
        console.log('in show')
        Author.findById(req.params.id).populate('books')
        .then(author => res.json(author))
        .catch(errorHandler.bind(res))
    }
    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(author => res.json(author))
        .catch(errorHandler.bind(res))
    }
    destroy(req, res) {
        Author.findByIdAndRemove(req.params.id)
        .then(book => res.json(book))
        .catch(errorHandler.bind(res))
    }
}



module.exports = new AuthorsController