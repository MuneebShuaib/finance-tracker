
const asyncHandler = require('express-async-handler')
const { getOverlayDirection } = require('react-bootstrap/esm/helpers')

const transactions = require('../models/transactionModel')
// @desc    Set transactions
// @route   Get /api/transactions
// @access  Private 
const getTransactions = asyncHandler(async (req, res) => {
    const transaction = await transactions.find()

    res.status(200).json(transaction)
})
// @desc    Set transactions
// @route   POST /api/transactions
// @access  Private 
const setTransaction = asyncHandler(async (req, res) => {
    const transaction = await transactions.create({
        text: req.body.text
    })
    res.json(transaction)
})
// @desc    Update goal
// @route   PUT /api/transactions:id
// @access  Private 
const updateTransaction = asyncHandler(async (req, res) => {
    const transaction = await transactions.findById(req.params.id)
    if(!transaction){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedTransaction = await transaction.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedTransaction)
})
// @desc    Delete goal
// @route   DELETE /api/transactions:id
// @access  Private 
const deleteTransactions = asyncHandler(async (req, res) => {
    const transaction = transactions.findById(req.params.id)
    const deletedTrans = await transaction.findByIdAndDelete(req.params.id, req.body, {new: true})
    res.json(deletedTrans)
})

module.exports = {
    getTransactions,
    setTransaction,
    updateTransaction,
    deleteTransactions
}