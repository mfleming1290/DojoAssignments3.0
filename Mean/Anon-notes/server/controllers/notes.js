const Note = require('mongoose').model('Note');
module.exports = {
    index(req, res) {
        Note.find({}, function(err, notes) {
            if(err) {
              return errorHandler.call(res, err)
            } else {
                console.log("got notes" + notes);
              res.json(notes);
            }
        })
    },
    create(req, res) {
        console.log(req.body);
        console.log("creating on server");
        Note.create(req.body)
        .then(function(newNote) {
            res.json(newNote)
        })
        .catch(function(err) {
            console.log(err);
        })
    }
}

function errorHandler(err) {
    this.status(422).json(err.message);
}
