import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "./login.css"
const Login = ({updateUser}) => {

  let history=useHistory();

  const [ user, setUser] = useState({
    email:"",
    password:""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const login = () => {
    axios.post("http://localhost:9001/login", user)
    .then(res => {
        alert(res.data.message)
        updateUser(res.data.user)
        history.push("/")
    })
}
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Your Email" ></input><br/>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Your Password" ></input><br/>
        <div className="button" onClick={login}  >Login</div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div>Don't have an account?</div>
          <div style={{color:"blueviolet",cursor:"pointer"}}  onClick={()=>history.push('/register')} >Register</div>
        </div>
    </div>
  )
}

export default Login