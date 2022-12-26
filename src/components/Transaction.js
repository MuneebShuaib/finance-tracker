import React from "react"

const Transaction = ({transaction})=>{
    return(
        <div>
            <h3>
                <div className='listed-transactions'>
                    <div>{transaction.id}</div>
                    <div>{transaction.category}</div>
                    <div>{transaction.date}</div>
                    <div>{transaction.expenditure}</div>
                    <div>{transaction.note}</div>
                </div>
            </h3>
        </div>
    )

}
export default Transaction