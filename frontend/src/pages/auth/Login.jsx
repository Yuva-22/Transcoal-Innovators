import React, {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Auth.css"

const Login = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email : "",
    password : ""
  })

  const loginUser = (e) => {

    e.preventDefault();
    
    axios.post('http://localhost:3001/consumer/login', {
      "email" : data.email,
      "password" : data.password,
    })
    .then((response) => {
        setData({email : "", password : ""});
        if(response.status == 200)
        {
          toast.success("User Login Successful !");
          navigate('/orderid');
        }
    })
    .catch((err) => {
        if(err.response.status == 401)
        {
          toast.error("Either the Passwords don't match or the user is not registered");
        }
        else
        {
          toast.error("Internal Server Error.");
        }
    });
  }

  return (
    <div className='login'>
        
         <form onSubmit={loginUser} className='loginformbox'>
            <h1>Login</h1>
            <label>Email</label>
            <input type = "email" placeholder='Enter the email' value = {data.email} onChange={(e) => setData({...data, email : e.target.value})}></input>
            
            <label>Password</label>
            <input type = "password" placeholder='Enter the password' value = {data.password} onChange={(e) => setData({...data, password : e.target.value})}></input>
            
            <button className = 'button' type = "submit">Login</button>
            <div className='signupdiv'>
              <h4>Don't Have an Account? </h4>
              <Link to="/register">Sign Up</Link>
            </div>
        </form>

    </div>
  )
}

export default Login