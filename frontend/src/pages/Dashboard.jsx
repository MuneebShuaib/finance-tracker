import '../index.css';
import AddTransaction from '../components/AddTransaction.js'
import { useState } from 'react';
import Transactions from '../components/Transactions.js'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Dashboard(){
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)
    //if no user detected then navigate to the login page
    useEffect(()=> {
      if(!user){
        navigate('/login')
      }
    }, [user,navigate])
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      category: 'Groceries',
      date: '12/23/2022',
      expenditure: '$73.9',
      note: 'Went to Aldis'
    },
    {
      id: 2,
      category: 'Entertainment',
      date: '12/18/2022',
      expenditure: '$7332.9',
      note: 'Strip Club'
    }
    ])
    //functions to change transactions
    const AddTrans = (transaction)=>{
      transaction.id = Math.floor((Math.random()*10000)+1);
      setTransactions([...transactions, transaction])
    } 
    const removeTrans = (id)=>{
      //transactions.filter
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
            <AddTransaction onAdd ={AddTrans}/>
            <Transactions transactions={transactions}/>
          </section>
        </div>
    </div>
    )
}

export default Dashboard