//we need 3 routes, 
//one to register a new user
//one that logs them in
//one to get the user information

const express = require('express')
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../controllers/userController')
const {protect} = require("../middleware/authMiddleware.js")
//we add a user with a post request
//when a post request is made on api/transactions, call the registerUser function
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)




module.exports = router