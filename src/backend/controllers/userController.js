const asyncHandler = require('express-async-handler')
const users = require('../models/userModel')

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public 
const loginUser = asyncHandler(async (req, res) => {

    res.json({message: "Authenticate user"})
})
// @desc    Register new user users
// @route   POST /api/users
// @access  Public 
const registerUser = asyncHandler(async (req, res) => {
    // const user = await users.create({
    //     text: req.body.text
    // })
    res.json({message: "Register user test"})
})
// @desc    Get user data
// @route   GET /api/users/me
// @access  Public 
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User data display"})

})

module.exports = {
    registerUser,
    loginUser,
    getMe
}