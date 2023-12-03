import '../index.css';
import TransactionForm from '../components/TransactionForm'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getTransactions, reset} from '../features/transactions/transactionSlice'
import TransactionItem from '../components/TransactionItem'
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
       //If i get rid of this return my website stops working. 
      else{
        dispatch(getTransactions())
      }

      

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
            <section className = 'transactions-list'>
              {transactions.length > 0 ? (
                <div className="transactions">
                  {transactions.map((transaction) =>(
                    <TransactionItem key={transaction._id} transaction = {transaction}/>
                  ))}
                </div>
              ) : (<h3>No Transactions yet</h3>)}
            </section>
          </section>
        </div>
    </div>
    )
}

export default Dashboard