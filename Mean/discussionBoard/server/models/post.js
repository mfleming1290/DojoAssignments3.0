const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema ({
    message: {
        type: String,
        required: true,
        unique: true
    },
    like: {
        type: Number
    },
    dislike: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    topic_id: {
        type: Schema.Types.ObjectId,
        ref: "Topic"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],


}, {
    timestamps: true
});


module.exports =  mongoose.model('Post', postSchema)
