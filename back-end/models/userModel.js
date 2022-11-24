
const crypto = require('crypto')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, 'Please tell us your full name!']
    },
    image: {
        type: String,
        default: 'default.jpg'
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
},{ timestamps: true })



userSchema.pre('save' , async function(next){
    const user = this
    if (!this.isModified('password')) return next()

    user.password = await bcrypt.hash(user.password , 12)

    next()
})


userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword , userPassword)
}


userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    const user = this
    if (user.passwordChangedAt) {
        const changedTimestamp = parseInt(user.passwordChangedAt.getTime()/1000)
        return JWTTimestamp < changedTimestamp
    }
    return false
}

const User = mongoose.model('User', userSchema);

module.exports = User;
