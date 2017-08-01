const Bicycle = require('mongoose').model('Bicycle')
const User = require('mongoose').model('User')

const errorHandler = require('./errors')


module.exports = {
    index(req, res) {
        Bicycle.find({}).populate('postedBy')
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
    },
    create(req, res) {
    console.log('in create')
	Bicycle.create(req.body)
		.then(bicycle => {
			return User.findByIdAndUpdate(req.body.postedBy, { $push : { bicycles: bicycle } })
				.then(() => res.json(bicycle))
		})
		.catch(errorHandler.bind(res));
    },
    show(req, res) {
        Bicycle.findById(req.params.id)
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
    },
    update(req, res) {
        Bicycle.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
    },
    destroy(req, res) {
        console.log('in destroy')
        Bicycle.findByIdAndRemove(req.params.id)
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
    },
    getBikesById(req, res) {
        console.log('in get bikes controller', req.cookies.userID)
        Bicycle.find({ postedBy: req.cookies.userID })
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
    },
    findOne(req, res) {
        Bicycle.count((err, count) => {
        console.log( "Number of users:", count );
        r = Math.floor(Math.random()*(count-1+1)+0)
        Bicycle.findOne().skip(r)
        .then(bicycle => res.json(bicycle))
        .catch(errorHandler.bind(res))
        })
        
    }


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