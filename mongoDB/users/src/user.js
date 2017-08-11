const mongoose = require('mongoose');
const postSchema = require('./post');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message:'Name must be longer than 2 characters'
        },
        required: [true, 'Name is required']
    },
    posts: [postSchema],
    likes: Number,
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'BlogPost'
    }]

});

userSchema.virtual('postCount').get(function() {
    return this.posts.length
});

userSchema.pre('remove', function(next) {
    const blogPost = mongoose.model('BlogPost');

    blogPost.remove({ _id: { $in: this.blogPosts } })
        .then(() => next());
});

const User = mongoose.model('User', userSchema);
module.exports = User;
