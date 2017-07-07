const Product = require('mongoose').model('Product');
const Order = require('mongoose').model('Order');

module.exports = {
    index(req, res) {
        Order.find({}).populate('_customer _product')
        .then(function(orders) {
            console.log(orders);
              res.json(orders);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    show(req, res) {
        Order.findById(req.params.id)
        .then(function(order) {
            res.json(order);
        })
        .catch(errorHandler.bind(res))
    },
    create(req, res){
    var quantity = req.body.quantity,
        _customer = req.params.customerId,
        _product = req.params.productId;

    if (quantity < 1) { return res.json(false); }
    Product.isQuantityAvailable(_product, quantity, function(result, product){
      if (result) {
        product.decreaseQuantity(quantity, function(err){
          if(err){ return res.json(err); }
          Order.create({ quantity: quantity, _customer: _customer, _product: _product}, function(err){
            if (err) { return re.json(err); }
            return res.json(true)
          })
        })
      } else {
        return res.json(false);
      }
    })
  },
    delete(req, res) {
        Order.findByIdAndRemove(req.params.id)
        .then(function(order) {
            console.log(`${order} has been removed`);
            res.json(true);
        })
        .catch(errorHandler.bind(res));
    },
    recent(req, res) {
        Order.find({})
        .sort('-created_at')
        .limit(3)
        .populate('_customer _product')
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
