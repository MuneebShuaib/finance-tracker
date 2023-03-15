const asyncHandler = require('express-async-handler')
const users = require('../models/userModel')
const jwt = require('jsonwebtoken')
//for encrypting password
const bcrypt = require('bcryptjs')
const User = require('../models/userModel.js')
require('dotenv').config()

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public 
//wrapped all of this in asyncHandler to handle exceptions according to the vid
const loginUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body
    //checks for user email
    const user = await User.findOne({email})
    //if email exists, and the password matches, enter the if statement. the compare method decrypts the 2nd parameter and compares it to the 1st
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({            
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })

    } else{
        res.status(400)
        throw new Error("Invalid credentials")
    }
})
// @desc    Register new user users
// @route   POST /api/users
// @access  Public 
const registerUser = asyncHandler(async (req, res) => {

    //grab the data from the post request body
    const {name, email, password} = req.body
    //checks to make sure all these fields are in the req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }
    //find user by that email, if it already exists throw an error
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})
// @desc    Get user data
// @route   GET /api/users/me
// @access  PRIVATE 
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User data display"})
    const {_id, name, email} = await User.findById(req.user.id);

})
const generateToken = (id) =>{
    //sign a new token with the id that is passed in
    //with that secret used, that expires in 30 days
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}