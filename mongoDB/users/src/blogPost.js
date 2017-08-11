const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
    title: String,
    content: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
     }]
});

const blogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = blogPost;
