const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    postNum: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    answers: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],


}, {
    timestamps: true
});


module.exports =  mongoose.model('Topic', topicSchema)
