const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema ({
    text: {
        type: String,
        required: true,
    },
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    
}, {
    timestamps: true
});

module.exports =  mongoose.model('Post', postSchema)
