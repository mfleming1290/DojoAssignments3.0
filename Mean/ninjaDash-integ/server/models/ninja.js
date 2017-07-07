const mongoose = require('mongoose');
const {Schema} = mongoose;

const ninjaSchema = new Schema({
    'name': {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    'age': {
        type: Number,
    },
    'belt': {
        type: String,
        trim: true
    },
    'location': {
        type: String,
        required: true,
        minlength: 3,
        trim: true

    }
}, {timestamps: true});

module.exports = mongoose.model('Ninja', ninjaSchema)
