import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import {Spinner} from '../components/Spinner'
import '../index.css'

function Login(){

    const [formData, setFormData] = useState({
      email:'',
      password:'',
    })
    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const{user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

    useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      if(isSuccess || user){
        navigate('/')
      }

      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

      if(isLoading){
        return <spinner/>
      }
    const onChange = (e)=>{
      //set form data to whatever we enter
      //formData is just one object 
      //...prevState is whatever was previously stated and they key is e.target.name, which will update prevState each time y=something changes
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }

    const onSubmit = (e)=>{
      e.preventDefault()
      const userData = {
        email,
        password
      }
      dispatch(login(userData))
    }
    return(
        <Form onSubmit={onSubmit}>
          <h1>Login</h1>

          <div className='form-group'>
              <input type="text" className="form-control" placeholder='Enter your email' value={email} id='email' name='email' onChange={onChange} />
          </div>
          <div className='form-group'>
              <input type="password" className="form-control" placeholder='Enter your password' value={password} id='password' name='password' onChange={onChange} />
          </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Login