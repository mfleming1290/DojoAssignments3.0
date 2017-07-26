const mongoose = require('mongoose');
const {Schema} = mongoose;

const chatSchema = new Schema({
    room: String,
    nickname: String,
    message: String,
    
}, {timestamps: true})

module.exports = mongoose.model('Chat', chatSchema)
