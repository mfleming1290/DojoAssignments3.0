const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');

const { Schema } = mongoose;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minlength: [2, 'username must be at least 2 characters'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'must be at least 8 characters']
    },
    topics: [{
        type: Schema.Types.Mixed,
        ref: "Topics"
    }],
    posts: [{
        type: Schema.Types.Mixed,
        ref: "Posts"
    }],
    comments: [{
        type: Schema.Types.Mixed,
        ref: "Comments"
    }]
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10)
        .then(hashed => {
            this.password = hashed;
            next()
        })
        .catch(next);
});

userSchema.statics.verifyPassword = function(canidatePassword, hashedPassword) {
    return bcrypt.compare(canidatePassword, hashedPassword);
}

module.exports =  mongoose.model('User', userSchema)
