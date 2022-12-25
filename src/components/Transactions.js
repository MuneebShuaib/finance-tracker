import Transaction from './Transaction.js'
import React from 'react'
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