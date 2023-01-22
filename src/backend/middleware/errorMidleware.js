//functions that execute during the req, res cycle
//this should overwrite the default express handler. When we get an error it keeps giving back an html page instead of just text
const errorHandler = (err, req, res, next) =>{
    //if res.statusCode is there, i wanna use it otherwise use 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        //if node_env is in product then set it to null otherwise err.stack
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}