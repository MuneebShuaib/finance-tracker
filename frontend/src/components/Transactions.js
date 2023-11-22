import Transaction from './Transaction.js'
import React from 'react'


const Transactions = ({transactions})=>{

    return(
        <div>
            {transactions.map((transaction)=>(

                <Transaction key = {transaction.id} transaction = {transaction}/>
            ))}
        </div>


    )
}
export default Transactions