const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false);

//all mongoose functions are async, they return a promise
const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        //console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB


