const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobile: {
        type: String,
        unique: true,
        sparse: true, // Allows either mobile or email to be empty
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    password: {
        type: String,
        minlength: 6, // Set a minimum length for security
    },
    otp: {
        type: String, // Store OTP temporarily
    },
    isVerified: {
        type: Boolean,
        default: false, // User is not verified until they enter correct OTP
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;