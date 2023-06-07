import {Link} from 'react-router-dom'
 
//im using react-router-dom to link each li to an route like /login or /register
function Header(){
    return(
        <header className='header'>
        <div className = 'logo'>
            <Link to='/'>TransactionSetter</Link>

        </div>
        <ul>
            <li>
                <Link to='/login'>
                    Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    Register
                </Link>
            </li>
        </ul>
        </header>
    )
}
export default Header