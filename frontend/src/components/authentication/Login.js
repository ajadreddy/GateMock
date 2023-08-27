import React, { useState } from 'react'

const Login = () => {
    const [name,setName] = useState('');
    function handleLoginSubmit() {
        fetch(`http://localhost:8080/login?name=${name}`)
            .then(response => response.text())
            .then(result => console.log(result));
    }
  return (
    <>
    <div>Login</div>
    <div>
        <label htmlFor="name">Enter name</label><br />
        <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />
        <button onClick={()=>{handleLoginSubmit()}}>Submit</button>
    </div>
    </>
  )
}

export default Login