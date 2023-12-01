import '../index.css';
import TransactionForm from '../components/TransactionForm'
import { useState } from 'react';
import Transactions from '../components/Transactions'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getTransactions, reset} from '../features/transactions/transactionSlice'
function Dashboard(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { transactions, isLoading, isError, message} = useSelector((state) => state.transactions)
    useEffect(()=> {
      if(isError){
        console.log(message)
      }
      //if no user detected then navigate to the login page
      if(!user){
        navigate('/login')
      }

      dispatch(getTransactions())

      return ()=>{
        dispatch(reset())
      }
    }, [user,navigate, isError, message, dispatch])

    if(isLoading){
      return <Spinner />
    }

    return(
      <div className='container'>
        <div className ='left-side-bar'>
          <h1>Welcome {user && user.name}</h1>
        </div>
        <div className = 'main-content'>
          <section className = 'graphs-section'>

          </section>

          <section className = 'transaction-section'>
            <TransactionForm />
            <Transactions transactions={transactions}/>
          </section>
        </div>
    </div>
    )
}

export default Dashboard