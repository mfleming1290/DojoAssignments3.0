var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 2},
    message: { type: String, required: true, maxlength: 200 },
}, {timestamps: true });

var Quote = mongoose.model('User', UserSchema);
