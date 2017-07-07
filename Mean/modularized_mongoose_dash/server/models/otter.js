var mongoose = require('mongoose');
var OtterSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    color: { type: String, required: true, maxlength: 200 },
    weight: { type: Number, required: true }

}, {timestamps: true });
mongoose.model('Otter', OtterSchema);
var Otter = mongoose.model('Otter')
mongoose.Promise = global.Promise;
