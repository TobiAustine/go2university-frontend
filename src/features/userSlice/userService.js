import axios from 'axios'

const API_URL = "http://localhost:9000"

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL+ '/users/register' , userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))   
    }

    return response.data

}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

//login user

const login = async(userData) => {
    const response = await axios.post(API_URL + '/users/login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))   
    }

    return response.data

}


const userService = {
    register, logout, login
} 

export default userService
