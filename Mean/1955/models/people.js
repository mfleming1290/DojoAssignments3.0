var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
    name:{type:String},
}, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });
mongoose.model('people', peopleSchema);
