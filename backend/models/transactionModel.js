const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //
        ref: 'User'
    },
    category:{
        type: String
    },
    expenditure:{
        type: Number
    },
    date: {
        type: Date,
        //required: [true, 'Please add a text value']
    },
    note:{
        type: String
    },

}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Transaction', transactionSchema)
