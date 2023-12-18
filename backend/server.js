const connectDB = require('./config/db')
const express = require('express')
const routes = require('./routes/transactionRoutes')
const {errorHandler} = require('./middleware/errorMidleware')
require('dotenv').config()



connectDB()

const app = express()


PORT = process.env.PORT 
PORT2 = process.env.PORT2
//in order to use body data, we just have to add a couple lines of middleware
//middleware:
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/transactions', routes)
app.use('/api/users', require("./routes/userRoutes"))

app.use(errorHandler)
//run express server on PORT, and console log 'server connected on port'
//app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

app.listen(PORT || PORT2, ()=> console.log(`server connected on port bhenchod`))

