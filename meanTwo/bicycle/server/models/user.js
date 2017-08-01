const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised')
const validator = require('validator')
const locking = require('mongoose-account-locking')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator(value) {
                return validator.isEmail(value)
            }
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'must be at least 8 characters']
        
    },
    bicycles: {
        type: Schema.Types.ObjectId,
        ref: 'Bicycle',
    }, 
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10)
        .then(hashed => {
            this.password = hashed;
            next();
        })
        .catch(next);
});

userSchema.statics.validatePassword = function(canidatePassword, hashedPassword) {
    return bcrypt.compare(canidatePassword, hashedPassword);
}

userSchema.plugin(locking);


module.exports =  mongoose.model('User', userSchema)