const mongoose = require('mongoose')
require('dotenv').config()

//all mongoose functions are async, they return a promise
const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect('mongodb+srv://Muneeb:l0liscool@financetrackercluster.k9vq9ij.mongodb.net/?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB


