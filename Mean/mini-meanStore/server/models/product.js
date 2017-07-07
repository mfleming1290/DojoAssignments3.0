const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    'name': String,
    'img': String,
    'description': String,
    'quantity': { type: Number, default: 50 },
    'created_at': { type: Date, default: Date.now() }
});

productSchema.statics.isQuantityAvailable = function(productId, quantityRequested, callback) {
    this.findById(productId, function(err, product) {
        if (err) {
            return callback(err);
        }
        var result = (product.quantity >= quantityRequested);
        return callback(result, product)
    })
};

productSchema.methods.decreaseQuantity = function(quantity, callback) {
    this.quantity -= quantity;
    this.save(function(err) {
        callback(err)
    })
};

module.exports =  mongoose.model('Product', productSchema)
