const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    _customer: { type : Schema.ObjectId, ref : 'Customer' },
    _product: { type : Schema.ObjectId, ref : 'Product' },
    quantity: Number,
    created_at: { type: Date, default: Date.now() }
});

orderSchema.statics.removeOrdersByCustomerId = function(customerId, callback) {
  // Still need to add pending quantities back to orders...
  this.remove({ _customer: customerId}, function(err){
    return callback(err);
  })
};

orderSchema.statics.removeOrdersByProductId = function(productId, callback) {
  // Still need to add pending quantities back to orders...
  this.remove({ _product: productId}, function(err){
    return callback(err);
  })
};

module.exports = mongoose.model("Order", orderSchema);
