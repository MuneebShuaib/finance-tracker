import './index.css';
import AddTransaction from './components/AddTransaction.js'
import { useState } from 'react';
import Transactions from './components/Transactions.js'
import React from 'react';

function App() {
  

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
    transactions.filter
  }

  return (
    
    <div className='container'>
        <div className ='left-side-bar'>
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
  );
}


export default App;
