const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: String,
    created_at: { type: Date, default: Date.now() }
});

module.exports =  mongoose.model('Customer', customerSchema)
