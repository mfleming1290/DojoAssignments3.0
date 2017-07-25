const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    'name': {
        type: String,
        minlength: 3,
        required: true,
        trim: true
    },
    'position': {
        type: String,
        minlength: 2,
        trim: true
    },
    'gameOne': {
        type: String,
        default: 'undecided'
    },
    'gameTwo': {
        type: String,
        default: 'undecided'
    },
    'gameThree': {
        type: String,
        default: 'undecided'
    },
}, {timestamps: true})

module.exports = mongoose.model('Player', playerSchema)
