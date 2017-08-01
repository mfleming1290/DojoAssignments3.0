const mongoose = require('mongoose');
const {Schema} = mongoose;
const validator = require('validator')

const bicycleSchema = new Schema({
    'title': {
        type: String,
        required: [true, 'Please enter a title']
    },
    'description': {
        type: String,
        required: true,
        maxLength: [200, 'Can only be 200 characters long']
    },
    'postedBy': {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    'price': {
        type: Number,
        required: true,
        min: [1, 'must be atleaste 1$']
    },
    'year': {
        type: Number,
        required: true,
        
    },
    'location': {
        type: String,
        required: true,
    },
    'image': {
        type: String,
        required: true,
        
    },
    
    
}, {timestamps: true});

module.exports = mongoose.model('Bicycle', bicycleSchema)