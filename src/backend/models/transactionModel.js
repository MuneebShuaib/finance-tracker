const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema(
{
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    note:{
        type: String
    },
    category:{
        type: String
    },
    expenditure:{
        type: Number
    }
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Transaction', transactionSchema)

/*    id: 2,
    category: 'Entertainment',
    date: '12/18/2022',
    expenditure: '$7332.9',
    note: 'Strip Club'
 */