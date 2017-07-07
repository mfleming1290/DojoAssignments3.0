var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
}, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });
mongoose.model('user', userSchema);
