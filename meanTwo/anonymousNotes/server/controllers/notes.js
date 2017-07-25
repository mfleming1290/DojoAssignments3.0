const Note = require('mongoose').model('Note');

module.exports = {
    index(req, res) {
        Note.find({})
        .then(function(notes) {
            res.json(notes)
        })
        .catch(function(err) {
            console.log(err)
        })
    },
    create(req, res) {
        Note.create(req.body)
        .then(function(newNote) {
            res.json(newNote)
        })
        .catch(function(err) {
            console.log(err)
        })
    }
    

}