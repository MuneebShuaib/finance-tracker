const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const protect = asyncHandler(async(req, res, next)=>{
    let token = req.headers.authorization.split(' ')[1]
    //checking authorization header, making sure its a bearer token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            //assigning the token to this variable
            
            //verify the token
            //decodes and verifies the token matches
            // console.log(token)
            // console.log(process.env.JWT_SECRET)
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token
            req.user = await User.findById(decoded.id).select('-password')
            //this calls the next piece of middleware
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }

    }
    //if no token at all, then not authorized
    if(!token){
        res.status(401)
        throw new Error('Not Authorized, no token')
    }
})

module.exports = {protect}