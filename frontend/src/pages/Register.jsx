import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
import '../index.css'
function Register(){

    const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:'',
      password2:'',
    })
    const {name, email, password, password2} = formData

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
    }
    return(
        <Form>
          <h1>Create an account</h1>
          <div className='form-group'>
              <input type="text" className="form-control" placeholder='Enter your name' value={name} id='name' name='name' onChange={onChange} />
          </div>
          <div className='form-group'>
              <input type="text" className="form-control" placeholder='Enter your email' value={email} id='email' name='email' onChange={onChange} />
          </div>
          <div className='form-group'>
              <input type="password" className="form-control" placeholder='Enter your password' value={password} id='password' name='password' onChange={onChange} />
          </div>
          <div className='form-group'>
              <input type="password" className="form-control" placeholder='Confirm password' value={password2} id='password2' name='password2' onChange={onChange} />
          </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Register