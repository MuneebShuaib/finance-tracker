import React from "react"
import { useState } from "react"

const AddTransaction = ({onAdd})=>{

    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [expenditure, setExpenditure] = useState(0)
    const [note, setNote] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        onAdd({category, date, expenditure, note})

        setCategory('')
        setDate('')
        setExpenditure(0)
        setNote('')
    }
    return(
        <>
            <form className = 'add-form' onSubmit={onSubmit}>
                <input className = 'add-btn'type="submit" value='Add Transaction'/>

                <div>
                    <label>Category: </label>
                    <input onChange={(e)=>{setCategory(e.target.value)}} placeholder = 'Enter category' value={category}></input>
                </div>

                <div>
                    <label>Date: </label>
                    <input type ='date' onChange={(e)=>{setDate(e.target.value)}} value={date}></input>
                </div>

                <div>
                    <label>Expense: $</label>
                    <input onChange={(e)=>{setExpenditure(e.target.value)}} placeholder = 'Enter expense' value={expenditure}></input>
                </div>

                <div>
                    <label>Note: </label>
                    <input onChange={(e)=>{setNote(e.target.value)}} placehodler = 'Enter note' value={note}></input>
                </div>
            </form>
        </>
    )

}

export default AddTransaction