const Ninja = require('mongoose').model('Ninja');
module.exports = {
    index(req, res) {
        Ninja.find({}, function(err, ninjas) {
            if(err) {
              return errorHandler.call(res, err)
            } else {
                console.log("got ninjas" + ninjas);
              res.json(ninjas);
            }
        })
    },
    show(req, res) {
        Ninja.findById(req.params.id)
        .then(function(ninja) {
            res.json(ninja);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        console.log(req.body);
        console.log("creating on server");
        Ninja.create(req.body)
        .then(function(newNinja) {
            res.json(newNinja)
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    update(req, res) {
        console.log(req);
        Ninja.findByIdAndUpdate(req.params.id, req.body)
        .then(function(ninja) {
            res.json(ninja)
        })
        .catch(errorHandler.bind(res));
    },
    delete(req, res) {
        Ninja.findByIdAndRemove(req.params.id)
        .then(function(ninja) {
            console.log(`${ninja.name} has been removed`);
            res.json(true);
        })
        .catch(errorHandler.bind(res));
    },
}

function errorHandler(err) {
    this.status(422).json(err.message);
}
