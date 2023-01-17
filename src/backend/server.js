const connectDB = require('./config/db')
const express = require('express')
const dotenv = require('dotenv').config()
const routes = require('./routes/transactionRoutes')
const app = express()
PORT = process.env.PORT || 500


app.use('/api/transactions', routes)
app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

connectDB()