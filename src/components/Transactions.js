import Transaction from './Transaction.js'

const Transactions = ({transactions})=>{
    return(
        <>
            {transactions.map((transaction)=>(
                <Transaction key = {transaction.id} transaction = {transaction}/>
            ))}
        </>
    )
}
export default Transactions