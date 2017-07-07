const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    'message': {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Note', noteSchema)
