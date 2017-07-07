const Product = require('mongoose').model('Product');
const Order = require('mongoose').model('Order');


module.exports = {
    index(req, res) {
        Product.find({})
        .then(function(products) {
            console.log(products);
              res.json(products);
        })
        .catch(errorHandler.bind(res))
    },
    create(req, res) {
        console.log(req.body);
        Product.create(req.body)
        .then(function() {
            res.json(true);
        })
        .catch(errorHandler.bind(res));
    },
    delete(req, res) {
        Order.removeOrdersByProductId(req.params.id, function(err) {
            if (err) {
                return res.json(err);
            }
        })
        Product.findByIdAndRemove(req.params.id)
        .then(function(ninja) {
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
