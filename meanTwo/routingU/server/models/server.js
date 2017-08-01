const mongoose = require('mongoose');
const {Schema} = mongoose;

const serverSchema = new Schema({
    name: {type: String, required: true},
    capacity: {type: Number, required: true},
    
}, {timestamps: true})

module.exports = mongoose.model('Server', serverSchema)
