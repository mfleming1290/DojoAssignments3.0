const mongoose = require('mongoose');
const {Schema} = mongoose;

const ninjaSchema = new Schema({
    'name': {
        type: String,
        required: true,
        minlength: [3, 'Name must be longer than 3 characters!'],
        trim: true
    },
    'age': {
        type: Number,
        required: true
    },
    'belt': {
        type: Schema.Types.ObjectId,
        ref: 'Belt'
    },
    'location': {
        type: String,
        required: true,
        minlength: 3,
        trim: true

    }
}, {timestamps: true});

module.exports = mongoose.model('Ninja', ninjaSchema)
