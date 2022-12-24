import React from "react"

const AddTransaction = ()=>{
    return(
        <form className = 'add-form'>
            <div>
                <label>Category: </label>
                <input></input>
            </div>

            <div>
                <label>Date: </label>
                <input></input>
            </div>

            <div>
                <label>Expense: </label>
                <input></input>
            </div>

            <div>
                <label>Note: </label>
                <input></input>
            </div>
        </form>
    )

}


export default AddTransaction