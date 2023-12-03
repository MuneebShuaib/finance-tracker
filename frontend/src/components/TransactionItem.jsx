import {useDispatch} from 'react-redux'
import {deleteTransaction} from '../features/transactions/transactionSlice'

function TransactionItem({transaction}){
    const dispatch = useDispatch()
    return(
        <div className = 'transaction'>
            <h4 className="grid-border">{new Date(transaction.createdAt).toLocaleString('en-US')}</h4>
            <h4 className="grid-border">{transaction.category}</h4>
            <h4 className="grid-border">${transaction.expenditure}</h4>
            <h4 className="grid-border">{transaction.note}</h4>
            <button onClick = {()=> dispatch(deleteTransaction(transaction._id))} className="close">X</button>
        </div>
    )
}

export default TransactionItem