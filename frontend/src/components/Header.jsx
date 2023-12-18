import {Link, useNavigate} from 'react-router-dom'
import{useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

//im using react-router-dom to link each li to an route like /login or /register
function Header(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const onLogout = async()=>{
        await dispatch(logout())
        await dispatch(reset())

        navigate('/login')
    }
    return(
        <header className='header'>
        <div className = 'logo'>
            {user ? (<Link to='/'>TransactionSetter</Link>) : (<Link to='/login'>TransactionSetter</Link>)}
        </div>
        
        <ul>
            {user ? (                        
            <li>
                <button className='btn' onClick={onLogout}>
                    Logout
                </button>
                    </li>) : (<>

                    <li>
                <Link to='/register'>
                        Register
                </Link>
                    </li>
                    <li>
                <Link to='/login'>
                        Login
                </Link>
                    </li>
            </>)}

        </ul>
        </header>
    )
}
export default Header