const Book = require('mongoose').model('Book')
const Author = require('mongoose').model('Author')

const errorHandler = require('./errors')


module.exports = {
    index(req, res) {
        Book.find({}).populate('author')
        .then(books => res.json(books))
        .catch(errorHandler.bind(res))
    },
    // creating a book and adding to an author
    create(request, response) {
	// assumes author id is included in new book information
	Book.create(request.body)
		.then(book => {
			return Author.findByIdAndUpdate(book.author, { $push : { books: book } })
				.then(() => response.json(book))
		})
		.catch(errorHandler.bind(response));
    },
    show(req, res) {
        Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(errorHandler.bind(res))
    },
    update(req, res) {
        Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(book => res.json(book))
        .catch(errorHandler.bind(res))
    },
    destroy(req, res) {
        console.log('in destroy')
        Book.findByIdAndRemove(req.params.id)
        .then(book => res.json(book))
        .catch(errorHandler.bind(res))
    },


}

// // creating a book and adding to an author
// create(request, response) {
// 	// assumes author id is included in new book information
// 	Book.create(request.body)
// 		.then(book => {
// 			return Author.findByIdAndUpdate(book.author, { $push : { books: book } })
// 				.then(() => response.json(book))
// 		})
// 		.catch(errorHandler.bind(response));
// }