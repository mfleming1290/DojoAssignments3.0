const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
