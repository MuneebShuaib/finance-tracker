const express = require('express')
const router = express.Router()
const {getTransactions, setTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactionController')
const {protect} = require("../middleware/authMiddleware.js")

// I could also do 
// router.route('/').get(getTransaction).post(setTransaction)
// router.route('/:id').put(updateTransaction).delete(deleteTransaction) instead of what i have below
router.get('/', protect, getTransactions)
router.post('/', protect, setTransaction)

router.put('/:id', protect, updateTransaction)
router.delete('/:id', protect, deleteTransaction)


module.exports = router