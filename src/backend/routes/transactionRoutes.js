const express = require('express')
const router = express.Router()
const {getTransactions, setTransaction, updateTransaction, deleteTransactions} = require('../controllers/transactionController')
// I could also do 
// router.route('/').get(getTransaction).post(setTransaction)
// router.route('/:id').put(updateTransaction).delete(deleteTransaction) instead of what i have below
router.get('/', getTransactions)
router.post('/', setTransaction)

router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransactions)


module.exports = router