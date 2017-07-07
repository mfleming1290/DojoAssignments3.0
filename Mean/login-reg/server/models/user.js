const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');

const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
        lowercase: true,
        minlength: [2, 'name must be at least 2 characters'],
    },
    last_name: {
        type: String,
        lowercase: true,
        required: [true, "Last name is required"],
        minlength: [2, 'username must be at least 2 characters'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'must be at least 8 characters']
    }
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
