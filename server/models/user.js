const mongoose = require('mongoose');

let User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }
});

module.exports = {User};