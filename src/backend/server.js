const connectDB = require('./config/db')
const express = require('express')
const dotenv = require('dotenv').config()
const routes = require('./routes/transactionRoutes')
const app = express()


PORT = process.env.PORT || 5000
//in order to use body data, we just have to add a couple lines of middleware
//middleware:
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/transactions', routes)
app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

connectDB()