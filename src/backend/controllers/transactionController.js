
// @desc    Set goals
// @route   Get /api/transactions
// @access  Private 
const getTransactions = (req, res) => {
    res.json({
        message: 'Get transactions'
    })
}
// @desc    Set transactions
// @route   POST /api/transactions
// @access  Private 
const setTransaction = (req, res) => {
    res.json({
        message: 'Create transaction'

    })
}
// @desc    Update goal
// @route   PUT /api/transactions:id
// @access  Private 
const updateTransaction = (req, res) => {
    res.json({
        message: `Update transaction ${req.params.id}`

    })
}
// @desc    Delete goal
// @route   DELETE /api/transactions:id
// @access  Private 
const deleteTransactions = (req, res) => {
    res.json({
        message: `Delete transaction ${req.params.id}`
    })
}

module.exports = {
    getTransactions,
    setTransaction,
    updateTransaction,
    deleteTransactions
}