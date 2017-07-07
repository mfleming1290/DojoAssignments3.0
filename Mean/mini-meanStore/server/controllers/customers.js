const Customer = require('mongoose').model('Customer');
const Order = require('mongoose').model('Order');

module.exports = {
    index(req, res) {
        Customer.find({})
        .then(function(customers) {
            console.log(customers);
              res.json(customers);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        Customer.create(req.body)
        .then(function(newCustomer) {
            res.json(newCustomer)
        })
        .catch(errorHandler.bind(res));
    },
    delete(req, res) {
        Order.removeOrdersByCustomerId(req.params.id, function(err){
            if (err) { return res.json(err); }
            Customer.remove({ _id: req.params.id }, function(err){
                if (err) { return res.json(err); }
                return res.json(true);
            });
        });
    },
    recent(req, res) {
        Customer.find({})
        .sort('-created_at')
        .limit(3)
        .exec(function(err, results){
            res.json(results)
        })
    }

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
