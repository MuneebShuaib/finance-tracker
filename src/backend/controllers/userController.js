const asyncHandler = require('express-async-handler')
const users = require('../models/userModel')

// @desc    Set users
// @route   Get /api/users
// @access  Private 
const getUsers = asyncHandler(async (req, res) => {
    const user = await users.find()

    res.status(200).json(user)
})
// @desc    Set users
// @route   POST /api/users
// @access  Private 
const setUser = asyncHandler(async (req, res) => {
    const user = await users.create({
        text: req.body.text
    })
    res.json(user)
})
// @desc    Update goal
// @route   PUT /api/users:id
// @access  Private 
const updateUser = asyncHandler(async (req, res) => {
    const user = await users.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateduser = await users.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateduser)
})
// @desc    Delete goal
// @route   DELETE /api/users:id
// @access  Private 
const deleteUsers = asyncHandler(async (req, res) => {
    const user = users.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('Goal not found')
    }
    //I dont need to save it and output, it wont be there anyways lol so i can just output
    //the id for front end use later
    await user.findOneAndRemove({_id: req.params.id})
    res.json({id: req.params.id})
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUsers
}