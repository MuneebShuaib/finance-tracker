const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
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