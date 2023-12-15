import React from "react"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createTransaction } from '../features/transactions/transactionSlice'


const TransactionForm = ()=> {

    
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [expenditure, setExpenditure] = useState(0)
    const [note, setNote] = useState('')


    const dispatch = useDispatch()

    const onSubmit = e =>{
        e.preventDefault()
        console.log("Reached onSubmit function and will dispatch")
        dispatch(createTransaction({
            category,
            date,
            expenditure,
            note
        }))


        setCategory('')
        setDate('')
        setExpenditure(0)
        setNote('')
    }
    return(
            <form onSubmit={onSubmit}>
                                    

                <div className="add-form">
                    <input 
                    type = 'text' 
                    name="category"
                    id="category"
                    placeholder = 'Enter category' 
                    value={category}
                    onChange={(e)=>{setCategory(e.target.value)}} 
                    />
                    <input 
                    type ='date' 
                    onChange={(e)=>{setDate(e.target.value)}} 
                    value={date}
                    />



                    <input 
                    type='text'
                    onChange={(e)=>{setExpenditure(e.target.value)}} 
                    placeholder = 'Enter expense' 
                    value={expenditure}
                    />


                
                    <input 
                    type='text'
                    onChange={(e)=>{setNote(e.target.value)}} 
                    placeholder = 'Enter note' 
                    value={note}                    
                    />
                </div>
                <button
                type="submit" 
                className = 'add-btn'>
                Add Transaction
                </button>
                
            </form>            
    )

}

export default TransactionForm

