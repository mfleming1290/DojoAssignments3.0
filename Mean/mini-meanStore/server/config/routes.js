const customerController = require('../controllers/customers');
const orderController = require('../controllers/orders');
const productController = require('../controllers/products');

module.exports = function(app){
  // app.get('/', function(req, res){
  //   res.sendFile(__dirname + '../../client/index.html');
  // });

  // ORDERS
  app.get('/orders', orderController.index)
     .get('/orders/recent', orderController.recent)
     .post('/orders/:productId/:customerId', orderController.create)
     .get('/orders/:id', orderController.show)
     .delete('/orders/:id', orderController.delete)

  // PRODUCTS
     .get('/products', productController.index)
     .post('/products', productController.create)
     .delete('/products/:id', productController.delete)

  // CUSTOMERS
     .get('/customers', customerController.index)
     .get('/customers/recent', customerController.recent)
     .post('/customers', customerController.create)
     .delete('/customers/:id', customerController.delete)
}
