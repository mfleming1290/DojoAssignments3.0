const Ninja = require('mongoose').model('Ninja');
module.exports = {
    index(req, res) {
        Ninja.find({}).populate('belt')
        .then(function(ninjas) {
            console.log(ninjas);
              res.json(ninjas);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    show(req, res) {
        Ninja.findById(req.params.id)
        .then(function(ninja) {
            res.json(ninja);
        })
        .catch(errorHandler.bind(res))
    },
    create(req, res) {
        Ninja.create(req.body)
        .then(function(newNinja) {
            res.json(newNinja)
        })
        .catch(errorHandler.bind(res));
    },
    update(req, res) {
        console.log("got here");
        Ninja.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(function(ninja) {
            res.json(ninja)
            console.log(ninja);
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
};


function errorHandler(error){
  let errors = [];

  if (error.errors) {
    // console.log(error.errors.name.message);
    // for (const [field, errorObject] of Object.entries(error.errors)) {
    //   // console.log(item[1].message);
    //
    //   errors.push(errorObject.message);
    // }

    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  } else if (typeof error === 'string') {
    errors.push(error);
  } else {
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}
