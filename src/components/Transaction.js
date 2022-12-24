import React from "react"

const Transaction = ({transaction})=>{
    return(
        <div>
            <h3 
            className='add-form'
            >
                <div>{transaction.id}</div>
                <div>{transaction.category}</div>
                <div>{transaction.date}</div>
                <div>{transaction.expenditure}</div>
                <div>{transaction.note}</div>
            </h3>
        </div>
    )

}
export default Transaction