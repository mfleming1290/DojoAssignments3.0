const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    }
}) ;

driver = mongoose.model('driver', driverSchema);
module.exports = driver;
