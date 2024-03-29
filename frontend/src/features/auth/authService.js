import axios from 'axios'
//we are making an http request and 
const API_URL = '/api/users/'
//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//login user
const login = async (userData) => {

    //will hit the login endpoint of our backend
    const response = await axios.post(API_URL + "login", userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}
//Logout user
const logout = async () => {
     await localStorage.removeItem('user')
}


//any functions we want to export we put in this variable
const authService ={
    register,
    logout,
    login,
}

export default authService