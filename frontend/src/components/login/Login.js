import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
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
    // <div className='login'>
    //     <h1>Login</h1>
    //     <input type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Your Email" ></input><br/>
    //     <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Your Password" ></input><br/>
    //     <div className="button" onClick={login}  >Login</div>
    //     <div style={{display:"flex",justifyContent:"center"}}>
    //       <div>Don't have an account?</div>
    //       <div style={{color:"blueviolet",cursor:"pointer"}}  onClick={()=>history.push('/register')} >Register</div>
    //     </div>
    // </div>
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form action="">
            <div className="mt-4">
                <div className="mt-4">
                    <label className="block" for="email">Email</label>
                            <input type="text" name="email" value={user.email}  placeholder="Your Email" onChange={ handleChange }
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="flex">
                    <div className="w-full px-7 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" style={{textAlign:"center",cursor:"pointer"}} onClick={login}>Login</div>
                    
                </div>
                <div className="mt-6 text-grey-dark">
                    Don't have an account?
                    <a className="text-blue-600 hover:underline"  onClick={()=>history.push('/register')}>
                        Register
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Login