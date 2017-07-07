const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');


const { Schema } = mongoose;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: [2, 'username must be at least 2 characters'],
        unique: true,
        match : [
                new RegExp('^[a-z0-9.-]+$', 'i'),
                'Is not valid. Use only alphanumeric characters except underscore.'
            ],
        
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'must be at least 8 characters']
    },

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
