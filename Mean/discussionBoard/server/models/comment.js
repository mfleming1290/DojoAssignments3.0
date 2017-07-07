const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema ({
    comment: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    topic_id: {
        type: Schema.Types.ObjectId,
        ref: "Topic"
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },


}, {
    timestamps: true
});


module.exports =  mongoose.model('Comment', commentSchema)
