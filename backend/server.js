const connectDB = require('./config/db')
const express = require('express')
const routes = require('./routes/transactionRoutes')
const {errorHandler} = require('./middleware/errorMidleware')
require('dotenv').config()
const path = require('path')


connectDB()

const app = express()


PORT = process.env.PORT 
//in order to use body data, we just have to add a couple lines of middleware
//middleware:
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/transactions', routes)
app.use('/api/users', require("./routes/userRoutes"))

//Serve frontend
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => 
    res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}else{
    app.get('/', (req, res) => res.send("not set on production"))
}
app.use(errorHandler)
//run express server on PORT, and console log 'server connected on port'
//app.listen(PORT, ()=> console.log(`server connected on port ${PORT}`))

app.listen(process.env.PORT, ()=> console.log(`server connected on port bhenchod`))

