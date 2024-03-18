import React, {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Auth.css'

const Register = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name : "",
        organization : "",
        email : "",
        password : ""
    })

   const registerUser = async (e) => {

        e.preventDefault();
        
        await axios.post("http://localhost:3001/consumer/register", {
            name : data.name,
            organization : data.organization,
            email : data.email,
            password : data.password
        })
        .then((response) => {
            setData({name : "", organization : "", email : "", password : ""});
            if(response.status == 200)
            {
                toast.success("User Registration Successful !");
                navigate('/login')
            }
        })
        .catch((err) => {

            if(err.response.status == 409)
            {
                toast.error("User already Registered. Please Login");
                navigate('/login');
            }
            else
            {
                toast.error("Internal Server Error. Please try after some time")
            }
        });

        
   } 


  return (
    <div className='register'>
        
        <form onSubmit={registerUser} className='loginformbox'>
            
            <h1>Sign Up</h1>
            <label>Name</label>
            <input type = "text" placeholder='Enter the name' value = {data.name} onChange={(e) => setData({...data, name : e.target.value})}></input>
            
            <label>Organization</label>
            <input type = "text" placeholder='Enter the organization' value = {data.organization} onChange={(e) => setData({...data, organization : e.target.value})}></input>
            
            <label>Email</label>
            <input type = "email" placeholder='Enter the email' value = {data.email} onChange={(e) => setData({...data, email : e.target.value})}></input>
            
            <label>Password</label>
            <input type = "password" placeholder='Enter the password' value = {data.password} onChange={(e) => setData({...data, password : e.target.value})}></input>
            
            <button type = "submit" className='button'>Register</button>
        </form>

    </div>
  )
}

export default Register