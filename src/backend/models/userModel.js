const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        unique: true
    }
},
{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema) 